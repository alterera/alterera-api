# GitHub Actions → VPS deployment setup

Automated deploys run on every push to `main` via [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml).

Flow:

```
git push main → GitHub Actions (test) → SSH to VPS → git pull → deploy.sh → PM2 reload
```

---

## Part 1 — One-time VPS setup

SSH into the VPS:

```bash
ssh root@94.136.191.2
```

### 1. Install Node.js 22 (if missing)

```bash
node -v   # should be v22.x
```

If needed:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
```

### 2. Clone the repository

```bash
mkdir -p /var/www/api.alterera.net
cd /var/www/api.alterera.net
git clone git@github.com:alterera/alterera-api.git .
```

For HTTPS clone, use a GitHub Personal Access Token as the password (not your GitHub account password).

### 3. Configure production environment

Create `/var/www/api.alterera.net/.env` (or `/etc/alterera/api.env` and point PM2 to it):

```bash
cp .env.example .env
nano .env
```

Required fixes for production:

- `NODE_ENV=production`
- `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` — at least 32 characters each
- `INTERNAL_API_KEY` — strong random secret (min 16 characters)
- `WHATSAPP_WEBHOOK_VERIFY_TOKEN` — required; must match Meta webhook config
- `WHATSAPP_PHONE_NUMBER_ID` — Meta Phone Number ID (from API Setup), not the phone number
- `CORS_ORIGINS` — your real frontend domains

Generate secrets:

```bash
openssl rand -hex 32
```

### 4. Create PostgreSQL database

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE alterera_api;
-- grant access to your existing user if needed
GRANT ALL PRIVILEGES ON DATABASE alterera_api TO alterera_api_user;
```

### 5. First manual deploy

```bash
cd /var/www/api.alterera.net
npm ci
npx prisma migrate deploy
npm run prisma:seed    # first time only
npm run build
pm2 start deploy/pm2/ecosystem.config.cjs
pm2 save
pm2 startup            # run the command it prints
```

Verify:

```bash
curl http://127.0.0.1:3000/health
curl https://api.alterera.net/health
```

---

## Part 2 — SSH key for GitHub Actions

Generate a **dedicated deploy key** (do not reuse your personal laptop key):

```bash
ssh-keygen -t ed25519 -C "github-actions-alterera-api" -f ~/.ssh/alterera_api_deploy -N ""
```

### Add public key to VPS

On the VPS:

```bash
cat ~/.ssh/alterera_api_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Or paste the public key into `~/.ssh/authorized_keys` if generating the key on your local machine.

### Test SSH

From your local machine:

```bash
ssh -i ~/.ssh/alterera_api_deploy root@94.136.191.2
```

---

## Part 3 — VPS deploy key for `git pull` (private repo)

On the VPS, generate a key used only for GitHub read access:

```bash
ssh-keygen -t ed25519 -C "vps-git-alterera-api" -f ~/.ssh/github_alterera_api -N ""
cat ~/.ssh/github_alterera_api.pub
```

In GitHub: **alterera/alterera-api → Settings → Deploy keys → Add deploy key**

- Title: `VPS Production`
- Key: paste the public key
- Allow write access: **off**

Configure SSH on the VPS:

```bash
nano ~/.ssh/config
```

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_alterera_api
  IdentitiesOnly yes
```

```bash
chmod 600 ~/.ssh/config
ssh -T git@github.com
```

If the repo was cloned via HTTPS, switch to SSH:

```bash
cd /var/www/api.alterera.net
git remote set-url origin git@github.com:alterera/alterera-api.git
git pull
```

---

## Part 4 — GitHub repository secrets

In GitHub: **https://github.com/alterera/alterera-api → Settings → Secrets and variables → Actions**

Add these **Repository secrets**:

| Secret name   | Value                                      |
|---------------|--------------------------------------------|
| `VPS_HOST`    | `94.136.191.2`                             |
| `VPS_USER`    | `root` (or a dedicated deploy user)        |
| `VPS_SSH_KEY` | Full private key (`alterera_api_deploy`)   |
| `VPS_PORT`    | `22` (optional)                            |

**Do not** store the VPS password in GitHub. Use SSH keys only.

To copy the private key:

```bash
cat ~/.ssh/alterera_api_deploy
```

Paste the entire output including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`.

---

## Part 5 — Enable GitHub Environment (optional)

For an approval gate before production deploy:

1. GitHub repo → **Settings → Environments**
2. Create environment: `production`
3. Add protection rules if desired (required reviewers)

The workflow references `environment: production`.

---

## Part 6 — Trigger a deploy

```bash
git push origin main
```

Or manually: **Actions → Deploy to VPS → Run workflow**

Watch the workflow in the **Actions** tab. On success, the VPS runs:

1. `git fetch` / `git reset --hard origin/main`
2. `npm ci`
3. `npx prisma migrate deploy`
4. `npm run build`
5. `pm2 reload` (or `pm2 start` on first deploy)

---

## Part 7 — Register Meta webhook

After deploy is live:

1. Meta App → WhatsApp → Configuration
2. Callback URL: `https://api.alterera.net/api/v1/whatsapp/webhook`
3. Verify token: same as `WHATSAPP_WEBHOOK_VERIFY_TOKEN` in `.env`

See [register-meta-webhook.md](./register-meta-webhook.md).

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm ci` lockfile error | Run `npm install` locally, commit `package-lock.json`, push |
| App won't start | Check `.env` — JWT secrets need 32+ chars, webhook token required |
| `git pull` fails on VPS | Set up deploy key (Part 3) |
| SSH action fails | Verify `VPS_SSH_KEY`, firewall allows port 22 from GitHub |
| PM2 not found | `npm install -g pm2` on VPS |
| 502 from Nginx | `pm2 logs alterera-api`, check `curl localhost:3000/health` |

GitHub Actions runners use dynamic IPs. If SSH is restricted by IP, allow GitHub’s IP ranges or use a self-hosted runner.
