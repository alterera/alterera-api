import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorrelationIdService } from '../../../common/services/correlation-id.service.js';
import { toInputJsonValue } from '../../../common/utils/prisma-json.util.js';
import { MessageDirection } from '../domain/enums/message-direction.enum.js';
import { MessageStatus } from '../domain/enums/message-status.enum.js';
import { MessageType } from '../domain/enums/message-type.enum.js';
import {
  WHATSAPP_PROVIDER,
  type WhatsAppProvider,
} from '../domain/ports/whatsapp-provider.port.js';
import { WhatsAppChannelIdentityRepository } from '../infrastructure/persistence/whatsapp-channel-identity.repository.js';
import { WhatsAppConversationRepository } from '../infrastructure/persistence/whatsapp-conversation.repository.js';
import { WhatsAppMessageRepository } from '../infrastructure/persistence/whatsapp-message.repository.js';
import type { SendMessageDto } from '../dto/send-message.dto.js';

@Injectable()
export class SendMessageService {
  constructor(
    @Inject(WHATSAPP_PROVIDER)
    private readonly whatsAppProvider: WhatsAppProvider,
    private readonly configService: ConfigService,
    private readonly correlationIdService: CorrelationIdService,
    private readonly channelIdentityRepository: WhatsAppChannelIdentityRepository,
    private readonly conversationRepository: WhatsAppConversationRepository,
    private readonly messageRepository: WhatsAppMessageRepository,
  ) {}

  async send(dto: SendMessageDto, idempotencyKey?: string) {
    if (idempotencyKey) {
      const existing =
        await this.messageRepository.findByIdempotencyKey(idempotencyKey);
      if (existing) {
        return existing;
      }
    }

    const correlationId = this.correlationIdService.get();
    const phoneNumberId = this.configService.getOrThrow<string>(
      'WHATSAPP_PHONE_NUMBER_ID',
    );

    const channelIdentity = await this.channelIdentityRepository.upsertByWaId({
      waId: dto.to,
      phoneNumber: dto.to,
    });

    const conversation = await this.conversationRepository.findOrCreate(
      channelIdentity.id,
      phoneNumberId,
    );

    const messageType = dto.type;
    const content = this.buildContent(dto);

    const pendingMessage = await this.messageRepository.create({
      channelIdentity: { connect: { id: channelIdentity.id } },
      conversation: { connect: { id: conversation.id } },
      direction: MessageDirection.OUTBOUND,
      type: messageType,
      status: MessageStatus.PENDING,
      content: toInputJsonValue(content)!,
      idempotencyKey,
      correlationId,
    });

    const result = await this.dispatchToProvider(dto, correlationId);

    if (!result.success || !result.metaMessageId) {
      return this.messageRepository.update(pendingMessage.id, {
        status: MessageStatus.FAILED,
        errorCode: result.errorCode,
        errorMessage: result.errorMessage ?? 'Failed to send message',
        failedAt: new Date(),
      });
    }

    const sentMessage = await this.messageRepository.update(pendingMessage.id, {
      status: MessageStatus.SENT,
      metaMessageId: result.metaMessageId,
      sentAt: new Date(),
    });

    await this.conversationRepository.update(conversation.id, {
      lastMessageAt: new Date(),
      lastMessagePreview: this.buildPreview(dto),
    });

    return sentMessage;
  }

  private async dispatchToProvider(dto: SendMessageDto, correlationId: string) {
    switch (dto.type) {
      case MessageType.TEMPLATE:
        if (!dto.templateName || !dto.language) {
          throw new BadRequestException(
            'templateName and language are required for template messages',
          );
        }
        return this.whatsAppProvider.sendTemplate({
          to: dto.to,
          templateName: dto.templateName,
          language: dto.language,
          components: dto.components as never,
          correlationId,
        });
      case MessageType.TEXT:
        if (!dto.body) {
          throw new BadRequestException('body is required for text messages');
        }
        return this.whatsAppProvider.sendText({
          to: dto.to,
          body: dto.body,
          correlationId,
        });
      case MessageType.IMAGE:
      case MessageType.DOCUMENT:
      case MessageType.AUDIO:
      case MessageType.VIDEO:
        if (!dto.mediaUrl) {
          throw new BadRequestException('mediaUrl is required for media messages');
        }
        return this.whatsAppProvider.sendMedia({
          to: dto.to,
          type: dto.type,
          link: dto.mediaUrl,
          caption: dto.caption,
          filename: dto.filename,
          correlationId,
        });
      case MessageType.INTERACTIVE:
        if (!dto.interactive) {
          throw new BadRequestException(
            'interactive payload is required for interactive messages',
          );
        }
        return this.whatsAppProvider.sendInteractive({
          to: dto.to,
          interactive: dto.interactive,
          correlationId,
        });
      default:
        throw new ConflictException(`Unsupported message type: ${dto.type}`);
    }
  }

  private buildContent(dto: SendMessageDto): Record<string, unknown> {
    return {
      type: dto.type,
      to: dto.to,
      body: dto.body,
      templateName: dto.templateName,
      language: dto.language,
      components: dto.components,
      mediaUrl: dto.mediaUrl,
      caption: dto.caption,
      filename: dto.filename,
      interactive: dto.interactive,
    };
  }

  private buildPreview(dto: SendMessageDto): string {
    if (dto.type === MessageType.TEXT) {
      return dto.body ?? '[text]';
    }
    if (dto.type === MessageType.TEMPLATE) {
      return `[template:${dto.templateName}]`;
    }
    return `[${dto.type}]`;
  }
}
