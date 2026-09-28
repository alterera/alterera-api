# Register Meta WhatsApp Webhook

After deploying to production, configure the webhook in Meta Developer Console:

1. Open your Meta App → WhatsApp → Configuration.
2. Set Callback URL to:
   `https://api.alterera.net/api/v1/whatsapp/webhook`
3. Set Verify Token to the value of `WHATSAPP_WEBHOOK_VERIFY_TOKEN`.
4. Subscribe to `messages` and `message_status` (or `messages` field bundle).

## Smoke test checklist

1. `GET https://api.alterera.net/health` returns `200`.
2. `GET https://api.alterera.net/health/ready` returns database connected.
3. Send template:
   `POST https://api.alterera.net/api/v1/whatsapp/messages`
   with `x-api-key` header.
4. Confirm webhook events are stored in `WebhookEvent` and `WhatsAppMessage`.
