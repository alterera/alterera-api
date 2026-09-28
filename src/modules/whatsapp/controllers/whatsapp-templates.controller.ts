import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../common/decorators/roles.decorator.js';
import { TemplateService } from '../application/template.service.js';

@ApiTags('whatsapp-templates')
@ApiBearerAuth()
@Controller('whatsapp/templates')
export class WhatsAppTemplatesController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'List cached WhatsApp templates' })
  async list() {
    const data = await this.templateService.listCached();
    return { data };
  }

  @Post('sync')
  @Roles('admin', 'super_admin')
  @ApiOperation({ summary: 'Sync templates from Meta' })
  async sync() {
    const data = await this.templateService.syncFromMeta();
    return { data };
  }

  @Get(':id')
  @Roles('viewer', 'operator', 'admin', 'super_admin')
  @ApiOperation({ summary: 'Get WhatsApp template by ID' })
  async findById(@Param('id') id: string) {
    const data = await this.templateService.findById(id);
    return { data };
  }
}
