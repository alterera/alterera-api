import { createHash } from 'node:crypto';

export function buildWebhookFingerprint(parts: string[]): string {
  return createHash('sha256').update(parts.join(':')).digest('hex');
}
