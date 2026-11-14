# Nixi

A blue-themed rebuild inspired by the supplied Nixi reference screenshots/video. This package is a **sandbox/manual-review implementation**, not a production payment platform.

## Included
- Mobile-first Home, Tap, Upgrade and Me views
- Registration/login with password hashing
- APX balance and transaction history
- Tap limits by level
- Level upgrades
- APX → NGN conversion calculation and history
- Withdrawal request workflow with admin approval/rejection
- Activation request workflow with admin approval/rejection
- Bank selector
- Admin dashboard at `/admin`
- JSON-file persistence so it runs without external services

## Run
Node.js 22+:

```bash
npm start
```

Open `http://localhost:3000`.

Admin: `http://localhost:3000/admin`
Default sandbox admin key: `nixi-admin-demo`

Set `NIXI_ADMIN_KEY` and `NIXI_SESSION_SECRET` environment variables before deployment.

## Production note
The reference screens show real-money activation/withdrawal language. This build intentionally keeps payment handling in manual-review/sandbox mode. Before any real deployment, add a licensed payment provider, KYC/AML controls where legally required, secure object storage for receipts, database migrations, rate limiting, CSRF protection, audit logs, HTTPS, secrets management, and independent security review.


Updated upgrade flow: every higher level has an Upgrade button; selecting one shows the OPay-unavailable warning first, then the bank details and receipt upload screen. Blue Nixi theme retained.

## Latest updates
- Added a Contact Support panel matching the supplied mobile reference video. Telegram and support email are configurable from `/admin` under “Help & contact support”.
- Registration validates email format, rejects a small set of common disposable-email domains, and checks the domain's mail/DNS records when DNS is available.
- New registration passwords must be at least 6 characters and include at least one number and one special character.
- Replaced the small logo image with a larger, sharpened PNG rendition for clearer display.

### Email verification note
The registration checks validate the email address format and domain, but they cannot prove that a person can receive messages at that mailbox. True mailbox ownership verification requires sending a one-time code or verification link through an SMTP/email provider. Configure an email provider before treating accounts as fully email-verified.
