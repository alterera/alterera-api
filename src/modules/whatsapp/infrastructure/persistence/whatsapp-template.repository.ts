import { Injectable } from '@nestjs/common';
import type { Prisma } from '../../../../generated/prisma/client.js';
import { PrismaService } from '../../../../database/prisma.service.js';

@Injectable()
export class WhatsAppTemplateRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany() {
    return this.prisma.whatsAppTemplate.findMany({
      orderBy: [{ name: 'asc' }, { language: 'asc' }],
    });
  }

  findById(id: string) {
    return this.prisma.whatsAppTemplate.findUnique({ where: { id } });
  }

  upsertByNameLanguage(data: {
    name: string;
    language: string;
    metaTemplateId?: string;
    category?: string;
    status?: string;
    components?: Prisma.InputJsonValue;
  }) {
    return this.prisma.whatsAppTemplate.upsert({
      where: {
        name_language: {
          name: data.name,
          language: data.language,
        },
      },
      create: {
        name: data.name,
        language: data.language,
        metaTemplateId: data.metaTemplateId,
        category: data.category,
        status: data.status,
        components: data.components,
        lastSyncedAt: new Date(),
      },
      update: {
        metaTemplateId: data.metaTemplateId,
        category: data.category,
        status: data.status,
        components: data.components,
        lastSyncedAt: new Date(),
      },
    });
  }
}
