import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PaginationQueryDto } from '../../../common/dto/pagination.dto.js';
import { Public } from '../../../common/decorators/public.decorator.js';
import { Roles } from '../../../common/decorators/roles.decorator.js';
import { InternalApiKeyGuard } from '../../../common/guards/internal-api-key.guard.js';
import { MessageQueryService } from '../application/message-query.service.js';
import { SendMessageService } from '../application/send-message.service.js';
import { SendMessageDto } from '../dto/send-message.dto.js';

@ApiTags('whatsapp-messages')
@Controller('whatsapp/messages')
export class WhatsAppMessagesController {
  constructor(
    private readonly sendMessageService: SendMessageService,
    private readonly messageQueryService: MessageQueryService,
  ) {}

  @Public()
  @Post()
  @UseGuards(InternalApiKeyGuard)
  @ApiSecurity('internal-api-key')
  @ApiHeader({
    name: 'x-api-key',
    description: 'Internal API key (Milestone 1) or JWT (Milestone 3+)',
  })
  @ApiHeader({
    name: 'Idempotency-Key',
    required: false,
    description: 'Prevents duplicate outbound sends',
  })
  @ApiOperation({ summary: 'Send a WhatsApp message' })
  async send(
    @Body() dto: SendMessageDto,
    @Headers('idempotency-key') idempotencyKey?: string,
  ) {
    const data = await this.sendMessageService.send(dto, idempotencyKey);
    return { data };
  }

  @Get()
  @ApiBearerAuth()
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'List WhatsApp messages' })
  async list(
    @Query() pagination: PaginationQueryDto,
    @Query('channelIdentityId') channelIdentityId?: string,
    @Query('conversationId') conversationId?: string,
  ) {
    const result = await this.messageQueryService.list(
      pagination.page ?? 1,
      pagination.limit ?? 20,
      { channelIdentityId, conversationId },
    );
    return result;
  }

  @Get(':id')
  @ApiBearerAuth()
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'Get WhatsApp message by ID' })
  async findById(@Param('id') id: string) {
    const data = await this.messageQueryService.findById(id);
    return { data };
  }
}
