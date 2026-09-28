import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CORRELATION_ID_HEADER } from '../constants/correlation-id.constant.js';
import { CorrelationIdService } from '../services/correlation-id.service.js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  constructor(private readonly correlationIdService: CorrelationIdService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const correlationId =
      request.correlationId ?? this.correlationIdService.get();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const body = exceptionResponse as Record<string, unknown>;
        message = (body.message as string) ?? message;
        error = (body.error as string) ?? error;
      }
    }

    if (status >= 500) {
      this.logger.error(
        {
          correlationId,
          path: request.url,
          method: request.method,
          error:
            exception instanceof Error ? exception.message : 'Unknown error',
        },
        exception instanceof Error ? exception.stack : undefined,
      );
    }

    response.setHeader(CORRELATION_ID_HEADER, correlationId);
    response.status(status).json({
      statusCode: status,
      message,
      error,
      correlationId,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
