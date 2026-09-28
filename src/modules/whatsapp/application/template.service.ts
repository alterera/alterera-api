import { Inject, Injectable } from '@nestjs/common';
import {
  WHATSAPP_PROVIDER,
  type WhatsAppProvider,
} from '../domain/ports/whatsapp-provider.port.js';
import { WhatsAppTemplateRepository } from '../infrastructure/persistence/whatsapp-template.repository.js';

@Injectable()
export class TemplateService {
  constructor(
    @Inject(WHATSAPP_PROVIDER)
    private readonly whatsAppProvider: WhatsAppProvider,
    private readonly templateRepository: WhatsAppTemplateRepository,
  ) {}

  listCached() {
    return this.templateRepository.findMany();
  }

  findById(id: string) {
    return this.templateRepository.findById(id);
  }

  async syncFromMeta() {
    const templates = await this.whatsAppProvider.listTemplates();
    const synced = [];

    for (const template of templates) {
      const record = await this.templateRepository.upsertByNameLanguage({
        name: template.name,
        language: template.language,
        metaTemplateId: template.id,
        category: template.category,
        status: template.status,
        components: template.components as never,
      });
      synced.push(record);
    }

    return synced;
  }
}
