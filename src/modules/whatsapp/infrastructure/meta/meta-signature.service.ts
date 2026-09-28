import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, timingSafeEqual } from 'node:crypto';

@Injectable()
export class MetaSignatureService {
  constructor(private readonly configService: ConfigService) {}

  verify(rawBody: Buffer, signatureHeader?: string): void {
    if (!signatureHeader) {
      throw new UnauthorizedException('Missing webhook signature');
    }

    const [algorithm, signature] = signatureHeader.split('=');
    if (algorithm !== 'sha256' || !signature) {
      throw new UnauthorizedException('Invalid webhook signature format');
    }

    const appSecret = this.configService.getOrThrow<string>('META_APP_SECRET');
    const expected = createHmac('sha256', appSecret)
      .update(rawBody)
      .digest('hex');

    const expectedBuffer = Buffer.from(expected, 'hex');
    const receivedBuffer = Buffer.from(signature, 'hex');

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      throw new UnauthorizedException('Invalid webhook signature');
    }
  }
}
