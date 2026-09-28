import { Injectable } from '@nestjs/common';
import { toInputJsonValue } from '../../../../common/utils/prisma-json.util.js';
import { PrismaService } from '../../../../database/prisma.service.js';

@Injectable()
export class WhatsAppChannelIdentityRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByWaId(waId: string) {
    return this.prisma.whatsAppChannelIdentity.findUnique({ where: { waId } });
  }

  findById(id: string) {
    return this.prisma.whatsAppChannelIdentity.findUnique({ where: { id } });
  }

  findMany(skip: number, take: number) {
    return this.prisma.whatsAppChannelIdentity.findMany({
      skip,
      take,
      orderBy: { lastSeenAt: 'desc' },
    });
  }

  count() {
    return this.prisma.whatsAppChannelIdentity.count();
  }

  upsertByWaId(data: {
    waId: string;
    phoneNumber?: string;
    profileName?: string;
    lastSeenAt?: Date;
    metadata?: Record<string, unknown>;
  }) {
    return this.prisma.whatsAppChannelIdentity.upsert({
      where: { waId: data.waId },
      create: {
        waId: data.waId,
        phoneNumber: data.phoneNumber,
        profileName: data.profileName,
        lastSeenAt: data.lastSeenAt,
        metadata: toInputJsonValue(data.metadata),
      },
      update: {
        phoneNumber: data.phoneNumber,
        profileName: data.profileName,
        lastSeenAt: data.lastSeenAt,
        metadata: toInputJsonValue(data.metadata),
      },
    });
  }
}
