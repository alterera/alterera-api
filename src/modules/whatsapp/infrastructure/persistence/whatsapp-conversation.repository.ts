import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../database/prisma.service.js';

@Injectable()
export class WhatsAppConversationRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.whatsAppConversation.findUnique({
      where: { id },
      include: {
        channelIdentity: true,
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
      },
    });
  }

  findMany(skip: number, take: number) {
    return this.prisma.whatsAppConversation.findMany({
      skip,
      take,
      orderBy: { lastMessageAt: 'desc' },
      include: { channelIdentity: true },
    });
  }

  count() {
    return this.prisma.whatsAppConversation.count();
  }

  findOrCreate(channelIdentityId: string, phoneNumberId: string) {
    return this.prisma.whatsAppConversation.upsert({
      where: {
        channelIdentityId_phoneNumberId: {
          channelIdentityId,
          phoneNumberId,
        },
      },
      create: {
        channelIdentityId,
        phoneNumberId,
      },
      update: {},
    });
  }

  update(
    id: string,
    data: {
      status?: string;
      lastMessageAt?: Date;
      lastMessagePreview?: string;
      unreadCount?: number;
    },
  ) {
    return this.prisma.whatsAppConversation.update({
      where: { id },
      data,
    });
  }
}
