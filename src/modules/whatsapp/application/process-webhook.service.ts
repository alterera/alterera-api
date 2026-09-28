import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { toInputJsonValue } from '../../../common/utils/prisma-json.util.js';
import { MessageDirection } from '../domain/enums/message-direction.enum.js';
import { MessageStatus } from '../domain/enums/message-status.enum.js';
import { MessageType } from '../domain/enums/message-type.enum.js';
import { WebhookEventStatus } from '../domain/enums/webhook-event-status.enum.js';
import { WhatsAppChannelIdentityRepository } from '../infrastructure/persistence/whatsapp-channel-identity.repository.js';
import { WhatsAppConversationRepository } from '../infrastructure/persistence/whatsapp-conversation.repository.js';
import { WhatsAppMessageRepository } from '../infrastructure/persistence/whatsapp-message.repository.js';
import { WebhookEventRepository } from '../infrastructure/persistence/webhook-event.repository.js';

interface MetaWebhookPayload {
  object?: string;
  entry?: Array<{
    id?: string;
    changes?: Array<{
      field?: string;
      value?: {
        messaging_product?: string;
        metadata?: { phone_number_id?: string; display_phone_number?: string };
        contacts?: Array<{ wa_id: string; profile?: { name?: string } }>;
        messages?: Array<Record<string, unknown>>;
        statuses?: Array<Record<string, unknown>>;
      };
    }>;
  }>;
}

@Injectable()
export class ProcessWebhookService {
  private readonly logger = new Logger(ProcessWebhookService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly webhookEventRepository: WebhookEventRepository,
    private readonly channelIdentityRepository: WhatsAppChannelIdentityRepository,
    private readonly conversationRepository: WhatsAppConversationRepository,
    private readonly messageRepository: WhatsAppMessageRepository,
  ) {}

  async processEvent(webhookEventId: string, payload: MetaWebhookPayload) {
    await this.webhookEventRepository.updateStatus(
      webhookEventId,
      WebhookEventStatus.PROCESSING,
    );

    try {
      const phoneNumberId =
        this.configService.getOrThrow<string>('WHATSAPP_PHONE_NUMBER_ID');

      for (const entry of payload.entry ?? []) {
        for (const change of entry.changes ?? []) {
          const value = change.value;
          if (!value) continue;

          for (const contact of value.contacts ?? []) {
            await this.channelIdentityRepository.upsertByWaId({
              waId: contact.wa_id,
              phoneNumber: contact.wa_id,
              profileName: contact.profile?.name,
              lastSeenAt: new Date(),
            });
          }

          for (const message of value.messages ?? []) {
            await this.processInboundMessage(
              message,
              value.contacts ?? [],
              phoneNumberId,
            );
          }

          for (const status of value.statuses ?? []) {
            await this.processStatusUpdate(status);
          }
        }
      }

      await this.webhookEventRepository.updateStatus(
        webhookEventId,
        WebhookEventStatus.PROCESSED,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Webhook processing failed';
      this.logger.error({ webhookEventId, message });
      await this.webhookEventRepository.updateStatus(
        webhookEventId,
        WebhookEventStatus.FAILED,
        message,
      );
      throw error;
    }
  }

  private async processInboundMessage(
    message: Record<string, unknown>,
    contacts: Array<{ wa_id: string; profile?: { name?: string } }>,
    phoneNumberId: string,
  ) {
    const waId = this.asString(message.from);
    if (!waId) return;

    const contact = contacts.find((item) => item.wa_id === waId);
    const channelIdentity = await this.channelIdentityRepository.upsertByWaId({
      waId,
      phoneNumber: waId,
      profileName: contact?.profile?.name,
      lastSeenAt: new Date(),
      metadata: { source: 'webhook' },
    });

    const conversation = await this.conversationRepository.findOrCreate(
      channelIdentity.id,
      phoneNumberId,
    );

    const type = this.mapMessageType(this.asString(message.type, 'unknown'));
    const preview = this.buildPreview(message, type);

    await this.messageRepository.create({
      channelIdentity: { connect: { id: channelIdentity.id } },
      conversation: { connect: { id: conversation.id } },
      direction: MessageDirection.INBOUND,
      type,
      status: MessageStatus.DELIVERED,
      content: toInputJsonValue(message)!,
      metaMessageId: this.asString(message.id),
      deliveredAt: new Date(),
    });

    await this.conversationRepository.update(conversation.id, {
      lastMessageAt: new Date(),
      lastMessagePreview: preview,
      unreadCount: conversation.unreadCount + 1,
    });
  }

  private async processStatusUpdate(status: Record<string, unknown>) {
    const metaMessageId = this.asString(status.id);
    if (!metaMessageId) return;

    const message =
      await this.messageRepository.findByMetaMessageId(metaMessageId);
    if (!message) return;

    const statusValue = this.asString(status.status);
    const timestamp = status.timestamp
      ? new Date(Number(status.timestamp) * 1000)
      : new Date();

    const updateData: Record<string, unknown> = {
      status: statusValue,
    };

    if (statusValue === MessageStatus.SENT) updateData.sentAt = timestamp;
    if (statusValue === MessageStatus.DELIVERED)
      updateData.deliveredAt = timestamp;
    if (statusValue === MessageStatus.READ) updateData.readAt = timestamp;
    if (statusValue === MessageStatus.FAILED) {
      updateData.failedAt = timestamp;
      const errors = status.errors as Array<Record<string, unknown>> | undefined;
      updateData.errorCode = this.asString(errors?.[0]?.code);
      updateData.errorMessage = this.asString(
        errors?.[0]?.title,
        'Delivery failed',
      );
    }

    await this.messageRepository.update(message.id, updateData);
    await this.messageRepository.createStatusEvent({
      message: { connect: { id: message.id } },
      status: statusValue,
      metaTimestamp: timestamp,
      rawPayload: toInputJsonValue(status),
    });
  }

  private mapMessageType(type: string): MessageType {
    switch (type) {
      case MessageType.TEXT:
      case MessageType.TEMPLATE:
      case MessageType.IMAGE:
      case MessageType.DOCUMENT:
      case MessageType.AUDIO:
      case MessageType.VIDEO:
      case MessageType.INTERACTIVE:
        return type as MessageType;
      default:
        return MessageType.UNKNOWN;
    }
  }

  private asString(value: unknown, fallback = ''): string {
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    return fallback;
  }

  private buildPreview(
    message: Record<string, unknown>,
    type: MessageType,
  ): string {
    if (type === MessageType.TEXT) {
      const text = message.text as { body?: string } | undefined;
      return text?.body ?? '[text]';
    }
    return `[${type}]`;
  }
}
