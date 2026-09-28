import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import type { Job } from 'bullmq';
import { ProcessWebhookService } from '../../application/process-webhook.service.js';
import { WebhookEventRepository } from '../persistence/webhook-event.repository.js';
import { WEBHOOK_QUEUE } from './webhook.queue.js';

@Processor(WEBHOOK_QUEUE)
export class WebhookProcessor extends WorkerHost {
  private readonly logger = new Logger(WebhookProcessor.name);

  constructor(
    private readonly processWebhookService: ProcessWebhookService,
    private readonly webhookEventRepository: WebhookEventRepository,
  ) {
    super();
  }

  async process(job: Job<{ webhookEventId: string }>): Promise<void> {
    const event = await this.webhookEventRepository.findById(
      job.data.webhookEventId,
    );

    if (!event?.payload) {
      this.logger.warn({
        webhookEventId: job.data.webhookEventId,
        message: 'Webhook event payload missing',
      });
      return;
    }

    await this.processWebhookService.processEvent(
      event.id,
      event.payload as Record<string, unknown>,
    );
  }
}
