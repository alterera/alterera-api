import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto.js';
import { Roles } from '../../../common/decorators/roles.decorator.js';
import { ChannelIdentityService } from '../application/channel-identity.service.js';

@ApiTags('whatsapp-channel-identities')
@ApiBearerAuth()
@Controller('whatsapp/channel-identities')
export class WhatsAppChannelIdentitiesController {
  constructor(private readonly channelIdentityService: ChannelIdentityService) {}

  @Get()
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'List WhatsApp channel identities' })
  async list(@Query() pagination: PaginationQueryDto) {
    return this.channelIdentityService.list(
      pagination.page ?? 1,
      pagination.limit ?? 20,
    );
  }

  @Get(':id')
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'Get WhatsApp channel identity by ID' })
  async findById(@Param('id') id: string) {
    const data = await this.channelIdentityService.findById(id);
    return { data };
  }
}
