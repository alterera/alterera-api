import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'node:crypto';
import { describe, expect, it, vi } from 'vitest';
import { MetaSignatureService } from './meta-signature.service.js';

describe('MetaSignatureService', () => {
  const appSecret = 'test-app-secret';
  const service = new MetaSignatureService({
    getOrThrow: vi.fn().mockReturnValue(appSecret),
  } as unknown as ConfigService);

  it('verifies a valid signature', () => {
    const rawBody = Buffer.from('{"test":true}');
    const signature = createHmac('sha256', appSecret)
      .update(rawBody)
      .digest('hex');

    expect(() =>
      service.verify(rawBody, `sha256=${signature}`),
    ).not.toThrow();
  });

  it('rejects an invalid signature', () => {
    const rawBody = Buffer.from('{"test":true}');

    expect(() => service.verify(rawBody, 'sha256=deadbeef')).toThrow(
      UnauthorizedException,
    );
  });
});
