import { Injectable } from '@nestjs/common';
import type { Prisma } from '../../../../generated/prisma/client.js';
import { PrismaService } from '../../../../database/prisma.service.js';

@Injectable()
export class WhatsAppMessageRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.WhatsAppMessageCreateInput) {
    return this.prisma.whatsAppMessage.create({ data });
  }

  update(id: string, data: Prisma.WhatsAppMessageUpdateInput) {
    return this.prisma.whatsAppMessage.update({ where: { id }, data });
  }

  findById(id: string) {
    return this.prisma.whatsAppMessage.findUnique({
      where: { id },
      include: { statusEvents: { orderBy: { createdAt: 'asc' } } },
    });
  }

  findByIdempotencyKey(idempotencyKey: string) {
    return this.prisma.whatsAppMessage.findUnique({
      where: { idempotencyKey },
      include: { statusEvents: { orderBy: { createdAt: 'asc' } } },
    });
  }

  findByMetaMessageId(metaMessageId: string) {
    return this.prisma.whatsAppMessage.findUnique({
      where: { metaMessageId },
    });
  }

  findMany(params: {
    skip: number;
    take: number;
    channelIdentityId?: string;
    conversationId?: string;
  }) {
    return this.prisma.whatsAppMessage.findMany({
      where: {
        channelIdentityId: params.channelIdentityId,
        conversationId: params.conversationId,
      },
      skip: params.skip,
      take: params.take,
      orderBy: { createdAt: 'desc' },
      include: { statusEvents: { orderBy: { createdAt: 'asc' } } },
    });
  }

  count(filters?: {
    channelIdentityId?: string;
    conversationId?: string;
  }) {
    return this.prisma.whatsAppMessage.count({ where: filters });
  }

  createStatusEvent(data: Prisma.WhatsAppMessageStatusEventCreateInput) {
    return this.prisma.whatsAppMessageStatusEvent.create({ data });
  }
}
