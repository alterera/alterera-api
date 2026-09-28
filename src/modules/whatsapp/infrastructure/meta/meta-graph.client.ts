import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CORRELATION_ID_HEADER } from '../../../../common/constants/correlation-id.constant.js';
import { CorrelationIdService } from '../../../../common/services/correlation-id.service.js';
import { mapMetaError } from './meta-error.mapper.js';

@Injectable()
export class MetaGraphClient {
  private readonly logger = new Logger(MetaGraphClient.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly correlationIdService: CorrelationIdService,
  ) {}

  private get baseUrl(): string {
    const version = this.configService.getOrThrow<string>(
      'META_GRAPH_API_VERSION',
    );
    return `https://graph.facebook.com/${version}`;
  }

  async post<T>(
    path: string,
    body: Record<string, unknown>,
    correlationId?: string,
  ): Promise<T> {
    return this.request<T>('POST', path, body, correlationId);
  }

  async get<T>(path: string, correlationId?: string): Promise<T> {
    return this.request<T>('GET', path, undefined, correlationId);
  }

  private async request<T>(
    method: 'GET' | 'POST',
    path: string,
    body?: Record<string, unknown>,
    correlationId?: string,
  ): Promise<T> {
    const accessToken = this.configService.getOrThrow<string>(
      'WHATSAPP_ACCESS_TOKEN',
    );
    const url = `${this.baseUrl}${path}`;
    const requestCorrelationId =
      correlationId ?? this.correlationIdService.get();

    const headers: Record<string, string> = {
      Authorization: `Bearer ${accessToken}`,
      [CORRELATION_ID_HEADER]: requestCorrelationId,
    };

    if (body) {
      headers['Content-Type'] = 'application/json';
    }

    let attempt = 0;
    const maxAttempts = 3;

    while (attempt < maxAttempts) {
      attempt += 1;
      try {
        const response = await fetch(
          url,
          method === 'POST'
            ? {
                method,
                headers,
                body: JSON.stringify(body),
              }
            : { method, headers },
        );

        const data = (await response.json()) as T & {
          error?: { message?: string; code?: number };
        };

        if (!response.ok) {
          if (this.isRetryable(response.status) && attempt < maxAttempts) {
            await this.delay(attempt * 500);
            continue;
          }
          throw { response: { data: { error: data.error } } };
        }

        return data;
      } catch (error) {
        if (attempt >= maxAttempts) {
          this.logger.error({
            correlationId: requestCorrelationId,
            path,
            method,
            message: 'Meta Graph API request failed',
          });
          throw mapMetaError(error);
        }
        await this.delay(attempt * 500);
      }
    }

    throw mapMetaError(new Error('Meta Graph API request failed'));
  }

  private isRetryable(status: number): boolean {
    return status === 429 || status >= 500;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
