# Alterera Central API Platform

Modular NestJS backend for [api.alterera.net](https://api.alterera.net).

## Stack

- NestJS 12 (ESM)
- PostgreSQL + Prisma 7
- Redis + BullMQ (optional async webhooks)
- Swagger at `/api/docs`

## Quick start

```bash
cp .env.example .env
npm install
docker compose -f docker/docker-compose.yml up -d
npm run prisma:migrate
npm run prisma:seed
npm run start:dev
```

## API

- Health: `GET /health`, `GET /health/ready`
- Docs: `GET /api/docs`
- WhatsApp webhook: `GET|POST /api/v1/whatsapp/webhook`
- Send message (Milestone 1): `POST /api/v1/whatsapp/messages` with `x-api-key`
- Auth: `POST /api/v1/auth/login`

## Deployment

See [deploy/scripts/register-meta-webhook.md](deploy/scripts/register-meta-webhook.md) and [deploy/scripts/deploy.sh](deploy/scripts/deploy.sh).
