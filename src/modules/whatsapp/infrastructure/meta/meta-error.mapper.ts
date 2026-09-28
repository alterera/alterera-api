import { HttpException, HttpStatus } from '@nestjs/common';

export interface MetaApiError {
  message?: string;
  type?: string;
  code?: number;
  error_subcode?: number;
  fbtrace_id?: string;
}

export function mapMetaError(error: unknown): HttpException {
  const metaError = extractMetaError(error);
  const code = metaError?.code ?? 0;
  const message = metaError?.message ?? 'Meta API request failed';

  if (code === 190 || code === 102) {
    return new HttpException(
      { message: 'WhatsApp access token is invalid or expired', error: 'Unauthorized' },
      HttpStatus.UNAUTHORIZED,
    );
  }

  if (code === 4 || code === 17 || code === 32 || code === 80007) {
    return new HttpException(
      { message: 'Meta API rate limit exceeded', error: 'Too Many Requests' },
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }

  if (code >= 100 && code < 200) {
    return new HttpException(
      { message, error: 'Bad Request' },
      HttpStatus.BAD_REQUEST,
    );
  }

  return new HttpException(
    { message: 'WhatsApp provider request failed', error: 'Bad Gateway' },
    HttpStatus.BAD_GATEWAY,
  );
}

function extractMetaError(error: unknown): MetaApiError | undefined {
  if (!error || typeof error !== 'object') {
    return undefined;
  }

  const err = error as { response?: { data?: { error?: MetaApiError } } };
  return err.response?.data?.error;
}
