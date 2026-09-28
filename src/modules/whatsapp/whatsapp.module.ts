import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WHATSAPP_PROVIDER } from './domain/ports/whatsapp-provider.port.js';
import { ChannelIdentityService } from './application/channel-identity.service.js';
import { ConversationService } from './application/conversation.service.js';
import { IngestWebhookService } from './application/ingest-webhook.service.js';
import { MessageQueryService } from './application/message-query.service.js';
import { ProcessWebhookService } from './application/process-webhook.service.js';
import { SendMessageService } from './application/send-message.service.js';
import { TemplateService } from './application/template.service.js';
import { WhatsAppChannelIdentitiesController } from './controllers/whatsapp-channel-identities.controller.js';
import { WhatsAppConversationsController } from './controllers/whatsapp-conversations.controller.js';
import { WhatsAppMessagesController } from './controllers/whatsapp-messages.controller.js';
import { WhatsAppTemplatesController } from './controllers/whatsapp-templates.controller.js';
import { WhatsAppWebhookController } from './controllers/whatsapp-webhook.controller.js';
import { MetaGraphClient } from './infrastructure/meta/meta-graph.client.js';
import { MetaSignatureService } from './infrastructure/meta/meta-signature.service.js';
import { MetaWhatsAppProvider } from './infrastructure/meta/meta-whatsapp.provider.js';
import { WebhookEventRepository } from './infrastructure/persistence/webhook-event.repository.js';
import { WhatsAppChannelIdentityRepository } from './infrastructure/persistence/whatsapp-channel-identity.repository.js';
import { WhatsAppConversationRepository } from './infrastructure/persistence/whatsapp-conversation.repository.js';
import { WhatsAppMessageRepository } from './infrastructure/persistence/whatsapp-message.repository.js';
import { WhatsAppTemplateRepository } from './infrastructure/persistence/whatsapp-template.repository.js';
import { WEBHOOK_QUEUE } from './infrastructure/queue/webhook.queue.js';
import { WebhookProcessor } from './infrastructure/queue/webhook.processor.js';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          url: configService.getOrThrow<string>('REDIS_URL'),
        },
      }),
    }),
    BullModule.registerQueue({ name: WEBHOOK_QUEUE }),
  ],
  controllers: [
    WhatsAppWebhookController,
    WhatsAppMessagesController,
    WhatsAppConversationsController,
    WhatsAppChannelIdentitiesController,
    WhatsAppTemplatesController,
  ],
  providers: [
    MetaGraphClient,
    MetaSignatureService,
    {
      provide: WHATSAPP_PROVIDER,
      useClass: MetaWhatsAppProvider,
    },
    WebhookEventRepository,
    WhatsAppChannelIdentityRepository,
    WhatsAppConversationRepository,
    WhatsAppMessageRepository,
    WhatsAppTemplateRepository,
    IngestWebhookService,
    ProcessWebhookService,
    SendMessageService,
    TemplateService,
    ConversationService,
    ChannelIdentityService,
    MessageQueryService,
    WebhookProcessor,
  ],
  exports: [SendMessageService, ProcessWebhookService],
})
export class WhatsAppModule {}
