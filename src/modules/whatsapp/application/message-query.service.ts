import { Injectable, NotFoundException } from '@nestjs/common';
import { WhatsAppMessageRepository } from '../infrastructure/persistence/whatsapp-message.repository.js';

@Injectable()
export class MessageQueryService {
  constructor(
    private readonly messageRepository: WhatsAppMessageRepository,
  ) {}

  async list(
    page: number,
    limit: number,
    filters?: { channelIdentityId?: string; conversationId?: string },
  ) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.messageRepository.findMany({ skip, take: limit, ...filters }),
      this.messageRepository.count(filters),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async findById(id: string) {
    const message = await this.messageRepository.findById(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}
