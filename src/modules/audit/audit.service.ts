import { Injectable } from '@nestjs/common';
import { toInputJsonValue } from '../../common/utils/prisma-json.util.js';
import { PrismaService } from '../../database/prisma.service.js';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(params: {
    userId?: string;
    action: string;
    resource?: string;
    metadata?: Record<string, unknown>;
    ipAddress?: string;
    userAgent?: string;
  }) {
    return this.prisma.auditLog.create({
      data: {
        userId: params.userId,
        action: params.action,
        resource: params.resource,
        metadata: toInputJsonValue(params.metadata),
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
      },
    });
  }
}
