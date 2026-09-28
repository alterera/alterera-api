import { Injectable, NotFoundException } from '@nestjs/common';
import { WhatsAppConversationRepository } from '../infrastructure/persistence/whatsapp-conversation.repository.js';

@Injectable()
export class ConversationService {
  constructor(
    private readonly conversationRepository: WhatsAppConversationRepository,
  ) {}

  async list(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.conversationRepository.findMany(skip, limit),
      this.conversationRepository.count(),
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
    const conversation = await this.conversationRepository.findById(id);
    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }
    return conversation;
  }

  async updateStatus(id: string, status: string) {
    await this.findById(id);
    return this.conversationRepository.update(id, { status });
  }
}
