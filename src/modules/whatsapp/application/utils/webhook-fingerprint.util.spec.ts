import { describe, expect, it } from 'vitest';
import { buildWebhookFingerprint } from './webhook-fingerprint.util.js';

describe('buildWebhookFingerprint', () => {
  it('returns stable hash for same input', () => {
    const first = buildWebhookFingerprint(['a', 'b']);
    const second = buildWebhookFingerprint(['a', 'b']);
    expect(first).toBe(second);
  });

  it('returns different hash for different input', () => {
    const first = buildWebhookFingerprint(['a']);
    const second = buildWebhookFingerprint(['b']);
    expect(first).not.toBe(second);
  });
});
