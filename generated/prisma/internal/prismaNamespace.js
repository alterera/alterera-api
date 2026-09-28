import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.0",
    engine: "0edf323efd1d98336f3f0a68684b56f689b900d3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    RefreshToken: 'RefreshToken',
    AuditLog: 'AuditLog',
    WhatsAppChannelIdentity: 'WhatsAppChannelIdentity',
    WhatsAppConversation: 'WhatsAppConversation',
    WhatsAppMessage: 'WhatsAppMessage',
    WhatsAppMessageStatusEvent: 'WhatsAppMessageStatusEvent',
    WhatsAppTemplate: 'WhatsAppTemplate',
    WebhookEvent: 'WebhookEvent'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    isActive: 'isActive',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    permissions: 'permissions'
};
export const UserRoleScalarFieldEnum = {
    userId: 'userId',
    roleId: 'roleId'
};
export const RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
export const WhatsAppChannelIdentityScalarFieldEnum = {
    id: 'id',
    waId: 'waId',
    phoneNumber: 'phoneNumber',
    profileName: 'profileName',
    lastSeenAt: 'lastSeenAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WhatsAppConversationScalarFieldEnum = {
    id: 'id',
    channelIdentityId: 'channelIdentityId',
    phoneNumberId: 'phoneNumberId',
    status: 'status',
    lastMessageAt: 'lastMessageAt',
    lastMessagePreview: 'lastMessagePreview',
    unreadCount: 'unreadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WhatsAppMessageScalarFieldEnum = {
    id: 'id',
    channelIdentityId: 'channelIdentityId',
    conversationId: 'conversationId',
    direction: 'direction',
    type: 'type',
    status: 'status',
    content: 'content',
    metaMessageId: 'metaMessageId',
    idempotencyKey: 'idempotencyKey',
    correlationId: 'correlationId',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    sentAt: 'sentAt',
    deliveredAt: 'deliveredAt',
    readAt: 'readAt',
    failedAt: 'failedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WhatsAppMessageStatusEventScalarFieldEnum = {
    id: 'id',
    messageId: 'messageId',
    status: 'status',
    metaTimestamp: 'metaTimestamp',
    rawPayload: 'rawPayload',
    createdAt: 'createdAt'
};
export const WhatsAppTemplateScalarFieldEnum = {
    id: 'id',
    metaTemplateId: 'metaTemplateId',
    name: 'name',
    language: 'language',
    category: 'category',
    status: 'status',
    components: 'components',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WebhookEventScalarFieldEnum = {
    id: 'id',
    source: 'source',
    eventType: 'eventType',
    fingerprint: 'fingerprint',
    status: 'status',
    metaMessageId: 'metaMessageId',
    payload: 'payload',
    errorMessage: 'errorMessage',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map