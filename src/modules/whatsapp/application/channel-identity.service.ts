import { Injectable, NotFoundException } from '@nestjs/common';
import { WhatsAppChannelIdentityRepository } from '../infrastructure/persistence/whatsapp-channel-identity.repository.js';

@Injectable()
export class ChannelIdentityService {
  constructor(
    private readonly channelIdentityRepository: WhatsAppChannelIdentityRepository,
  ) {}

  async list(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.channelIdentityRepository.findMany(skip, limit),
      this.channelIdentityRepository.count(),
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
    const identity = await this.channelIdentityRepository.findById(id);
    if (!identity) {
      throw new NotFoundException('Channel identity not found');
    }
    return identity;
  }
}
