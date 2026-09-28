import Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().default(3000),
  API_BASE_URL: Joi.string().uri().required(),
  LOG_LEVEL: Joi.string()
    .valid('debug', 'info', 'warn', 'error')
    .default('info'),

  DATABASE_URL: Joi.string().required(),

  INTERNAL_API_KEY: Joi.string().min(16).required(),

  JWT_ACCESS_SECRET: Joi.string().min(32).required(),
  JWT_REFRESH_SECRET: Joi.string().min(32).required(),
  JWT_ACCESS_EXPIRES_IN: Joi.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),

  CORS_ORIGINS: Joi.string().required(),

  META_APP_ID: Joi.string().required(),
  META_APP_SECRET: Joi.string().required(),
  WHATSAPP_ACCESS_TOKEN: Joi.string().required(),
  WHATSAPP_PHONE_NUMBER_ID: Joi.string().required(),
  WHATSAPP_BUSINESS_ACCOUNT_ID: Joi.string().required(),
  WHATSAPP_WEBHOOK_VERIFY_TOKEN: Joi.string().required(),
  META_GRAPH_API_VERSION: Joi.string()
    .pattern(/^v\d+\.\d+$/)
    .required(),

  THROTTLE_TTL: Joi.number().default(60000),
  THROTTLE_LIMIT: Joi.number().default(100),

  REDIS_URL: Joi.string().default('redis://localhost:6379'),
  WEBHOOK_ASYNC_ENABLED: Joi.boolean().default(false),
});
