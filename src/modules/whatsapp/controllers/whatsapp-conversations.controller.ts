import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto.js';
import { Roles } from '../../../common/decorators/roles.decorator.js';
import { ConversationService } from '../application/conversation.service.js';
import { UpdateConversationDto } from '../dto/update-conversation.dto.js';

@ApiTags('whatsapp-conversations')
@ApiBearerAuth()
@Controller('whatsapp/conversations')
export class WhatsAppConversationsController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'List WhatsApp conversations' })
  async list(@Query() pagination: PaginationQueryDto) {
    return this.conversationService.list(
      pagination.page ?? 1,
      pagination.limit ?? 20,
    );
  }

  @Get(':id')
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'Get WhatsApp conversation by ID' })
  async findById(@Param('id') id: string) {
    const data = await this.conversationService.findById(id);
    return { data };
  }

  @Patch(':id')
  @Roles('operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'Update conversation status' })
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateConversationDto,
  ) {
    const data = await this.conversationService.updateStatus(id, dto.status);
    return { data };
  }
}
