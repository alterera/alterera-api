import { Injectable } from '@nestjs/common';
import type { Prisma } from '../../../../generated/prisma/client.js';
import { PrismaService } from '../../../../database/prisma.service.js';
import { WebhookEventStatus } from '../../domain/enums/webhook-event-status.enum.js';

@Injectable()
export class WebhookEventRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByFingerprint(fingerprint: string) {
    return this.prisma.webhookEvent.findUnique({ where: { fingerprint } });
  }

  findById(id: string) {
    return this.prisma.webhookEvent.findUnique({ where: { id } });
  }

  create(data: Prisma.WebhookEventCreateInput) {
    return this.prisma.webhookEvent.create({ data });
  }

  updateStatus(
    id: string,
    status: WebhookEventStatus,
    errorMessage?: string,
  ) {
    return this.prisma.webhookEvent.update({
      where: { id },
      data: {
        status,
        errorMessage,
        processedAt:
          status === WebhookEventStatus.PROCESSED ||
          status === WebhookEventStatus.FAILED
            ? new Date()
            : undefined,
      },
    });
  }
}
