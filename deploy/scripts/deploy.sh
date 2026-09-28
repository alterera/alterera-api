#!/usr/bin/env bash
set -euo pipefail

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
export PATH="/root/.nvm/versions/node/v22.23.3/bin:/usr/local/bin:/usr/bin:$PATH"
APP_DIR="${APP_DIR:-/var/www/api.alterera.net}"
PM2_CONFIG="${PM2_CONFIG:-deploy/pm2/ecosystem.config.cjs}"
PM2_APP_NAME="${PM2_APP_NAME:-alterera-api}"

cd "$APP_DIR"

echo "Installing dependencies..."
if ! npm ci; then
  echo "npm ci failed; falling back to npm install..."
  npm install
fi

echo "Running database migrations..."
npx prisma migrate deploy

echo "Building application..."
npm run build

echo "Restarting PM2 process..."
if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
  pm2 reload "$PM2_CONFIG" --update-env
else
  pm2 start "$PM2_CONFIG"
fi

pm2 save

echo "Deployment complete."
