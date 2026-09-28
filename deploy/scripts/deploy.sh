#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/api.alterera.net}"

cd "$APP_DIR"

echo "Installing dependencies..."
npm ci

echo "Running database migrations..."
npx prisma migrate deploy

echo "Building application..."
npm run build

echo "Restarting PM2 process..."
pm2 reload deploy/pm2/ecosystem.config.cjs --update-env

echo "Deployment complete."
