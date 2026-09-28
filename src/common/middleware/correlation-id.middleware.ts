import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';
import { CORRELATION_ID_HEADER } from '../constants/correlation-id.constant.js';
import { CorrelationIdService } from '../services/correlation-id.service.js';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  constructor(private readonly correlationIdService: CorrelationIdService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const header = req.headers[CORRELATION_ID_HEADER];
    const correlationId =
      typeof header === 'string' && header.length > 0
        ? header
        : randomUUID();

    req.correlationId = correlationId;
    res.setHeader(CORRELATION_ID_HEADER, correlationId);

    this.correlationIdService.run(correlationId, () => next());
  }
}
