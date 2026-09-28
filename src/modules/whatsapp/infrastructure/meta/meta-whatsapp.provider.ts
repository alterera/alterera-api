import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { WhatsAppProvider } from '../../domain/ports/whatsapp-provider.port.js';
import type {
  MetaTemplate,
  ProviderSendResult,
  SendInteractiveInput,
  SendMediaInput,
  SendTemplateInput,
  SendTextInput,
} from '../../domain/types/provider.types.js';
import { MetaGraphClient } from './meta-graph.client.js';

interface MetaSendResponse {
  messages?: Array<{ id: string }>;
}

interface MetaTemplatesResponse {
  data?: MetaTemplate[];
}

@Injectable()
export class MetaWhatsAppProvider implements WhatsAppProvider {
  constructor(
    private readonly graphClient: MetaGraphClient,
    private readonly configService: ConfigService,
  ) {}

  private get phoneNumberId(): string {
    return this.configService.getOrThrow<string>('WHATSAPP_PHONE_NUMBER_ID');
  }

  async sendTemplate(input: SendTemplateInput): Promise<ProviderSendResult> {
    const body = {
      messaging_product: 'whatsapp',
      to: input.to,
      type: 'template',
      template: {
        name: input.templateName,
        language: { code: input.language },
        components: input.components,
      },
    };

    return this.sendMessage(body, input.correlationId);
  }

  async sendText(input: SendTextInput): Promise<ProviderSendResult> {
    const body = {
      messaging_product: 'whatsapp',
      to: input.to,
      type: 'text',
      text: { body: input.body },
    };

    return this.sendMessage(body, input.correlationId);
  }

  async sendMedia(input: SendMediaInput): Promise<ProviderSendResult> {
    const mediaPayload: Record<string, unknown> = { link: input.link };
    if (input.caption) {
      mediaPayload.caption = input.caption;
    }
    if (input.filename) {
      mediaPayload.filename = input.filename;
    }

    const body = {
      messaging_product: 'whatsapp',
      to: input.to,
      type: input.type,
      [input.type]: mediaPayload,
    };

    return this.sendMessage(body, input.correlationId);
  }

  async sendInteractive(
    input: SendInteractiveInput,
  ): Promise<ProviderSendResult> {
    const body = {
      messaging_product: 'whatsapp',
      to: input.to,
      type: 'interactive',
      interactive: input.interactive,
    };

    return this.sendMessage(body, input.correlationId);
  }

  async listTemplates(): Promise<MetaTemplate[]> {
    const wabaId = this.configService.getOrThrow<string>(
      'WHATSAPP_BUSINESS_ACCOUNT_ID',
    );
    const response = await this.graphClient.get<MetaTemplatesResponse>(
      `/${wabaId}/message_templates?limit=100`,
    );
    return response.data ?? [];
  }

  private async sendMessage(
    body: Record<string, unknown>,
    correlationId?: string,
  ): Promise<ProviderSendResult> {
    const response = await this.graphClient.post<MetaSendResponse>(
      `/${this.phoneNumberId}/messages`,
      body,
      correlationId,
    );

    const metaMessageId = response.messages?.[0]?.id;
    return {
      success: Boolean(metaMessageId),
      metaMessageId,
    };
  }
}
