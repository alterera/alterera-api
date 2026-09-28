const SENSITIVE_KEYS = [
  'authorization',
  'password',
  'token',
  'access_token',
  'refresh_token',
  'secret',
  'whatsapp_access_token',
  'meta_app_secret',
];

export function redactSensitiveData<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => redactSensitiveData(item)) as T;
  }

  if (value && typeof value === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value)) {
      if (
        SENSITIVE_KEYS.some((sensitive) =>
          key.toLowerCase().includes(sensitive),
        )
      ) {
        result[key] = '[REDACTED]';
      } else {
        result[key] = redactSensitiveData(nested);
      }
    }
    return result as T;
  }

  return value;
}
