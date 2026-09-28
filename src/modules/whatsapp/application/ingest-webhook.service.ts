import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectQueue } from '@nestjs/bullmq';
import type { Queue } from 'bullmq';
import { toInputJsonValue } from '../../../common/utils/prisma-json.util.js';
import { WebhookEventStatus } from '../domain/enums/webhook-event-status.enum.js';
import { WebhookEventRepository } from '../infrastructure/persistence/webhook-event.repository.js';
import { ProcessWebhookService } from './process-webhook.service.js';
import { buildWebhookFingerprint } from './utils/webhook-fingerprint.util.js';
import { WEBHOOK_QUEUE } from '../infrastructure/queue/webhook.queue.js';

@Injectable()
export class IngestWebhookService {
  private readonly logger = new Logger(IngestWebhookService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly webhookEventRepository: WebhookEventRepository,
    private readonly processWebhookService: ProcessWebhookService,
    @InjectQueue(WEBHOOK_QUEUE) private readonly webhookQueue: Queue,
  ) {}

  async ingest(payload: Record<string, unknown>) {
    const fingerprint = buildWebhookFingerprint([JSON.stringify(payload)]);
    const existing = await this.webhookEventRepository.findByFingerprint(
      fingerprint,
    );

    if (existing) {
      this.logger.debug({ fingerprint, message: 'Duplicate webhook ignored' });
      return { duplicate: true, eventId: existing.id };
    }

    const event = await this.webhookEventRepository.create({
      source: 'meta_whatsapp',
      eventType: 'whatsapp_notification',
      fingerprint,
      status: WebhookEventStatus.PENDING,
      payload: toInputJsonValue(payload),
    });

    const asyncEnabled =
      this.configService.get<boolean>('WEBHOOK_ASYNC_ENABLED') ?? false;

    if (asyncEnabled) {
      await this.webhookQueue.add(
        'process-webhook',
        { webhookEventId: event.id },
        {
          jobId: event.id,
          removeOnComplete: true,
          removeOnFail: false,
        },
      );
      return { duplicate: false, eventId: event.id, queued: true };
    }

    await this.processWebhookService.processEvent(event.id, payload);
    return { duplicate: false, eventId: event.id, queued: false };
  }
}
