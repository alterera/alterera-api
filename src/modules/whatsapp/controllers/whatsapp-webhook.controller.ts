import {
  Controller,
  ForbiddenException,
  Get,
  Headers,
  HttpCode,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';
import { Public } from '../../../common/decorators/public.decorator.js';
import { IngestWebhookService } from '../application/ingest-webhook.service.js';
import { MetaSignatureService } from '../infrastructure/meta/meta-signature.service.js';

@ApiTags('whatsapp-webhook')
@Controller('whatsapp/webhook')
export class WhatsAppWebhookController {
  constructor(
    private readonly configService: ConfigService,
    private readonly metaSignatureService: MetaSignatureService,
    private readonly ingestWebhookService: IngestWebhookService,
  ) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Meta webhook verification' })
  verify(
    @Query('hub.mode') mode?: string,
    @Query('hub.verify_token') verifyToken?: string,
    @Query('hub.challenge') challenge?: string,
  ) {
    const expectedToken = this.configService.getOrThrow<string>(
      'WHATSAPP_WEBHOOK_VERIFY_TOKEN',
    );

    if (mode === 'subscribe' && verifyToken === expectedToken) {
      return challenge ?? '';
    }

    throw new ForbiddenException('Webhook verification failed');
  }

  @Public()
  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Receive Meta webhook events' })
  async receive(
    @Req() request: RawBodyRequest<Request>,
    @Headers('x-hub-signature-256') signature?: string,
  ) {
    const rawBody = request.rawBody;
    if (!rawBody) {
      throw new ForbiddenException('Missing raw request body');
    }

    this.metaSignatureService.verify(rawBody, signature);
    const payload = JSON.parse(rawBody.toString('utf8')) as Record<
      string,
      unknown
    >;

    return this.ingestWebhookService.ingest(payload);
  }
}
