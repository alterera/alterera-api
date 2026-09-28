import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'node:async_hooks';
import { randomUUID } from 'node:crypto';

@Injectable()
export class CorrelationIdService {
  private readonly storage = new AsyncLocalStorage<string>();

  run<T>(correlationId: string, callback: () => T): T {
    return this.storage.run(correlationId, callback);
  }

  set(correlationId: string): void {
    this.storage.enterWith(correlationId);
  }

  get(): string {
    return this.storage.getStore() ?? randomUUID();
  }
}
