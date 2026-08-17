# Production deployment checklist

## Required environment variables

Create a production `.env` file with:

```bash
DATABASE_URL="file:./dev.db"
JWT_SECRET="generate-a-long-random-secret"
NEXT_PUBLIC_APP_NAME="Mwesh Developers Global"
```

For a hosted database, switch `DATABASE_URL` to your production Postgres/MySQL connection string.

## Security checks

- Keep `JWT_SECRET` long and unique.
- Do not commit real secrets to git.
- Use HTTPS in production.
- Keep `mwesh_session` cookie as `httpOnly` and `secure` in production.
- Restrict dashboard access via middleware.

## Build verification command

Use this in PowerShell when the local machine blocks scripts:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "Set-Location 'c:\Users\mary2\Downloads\material-tailwind-event-1.0.0\material-tailwind-event-1.0.0'; node .\node_modules\next\dist\bin\next build"
```

## Deployment targets

- Vercel: recommended for Next.js app hosting
- Netlify: possible, but requires careful Next.js runtime config
- Self-hosted Node: possible with `next start`

## Production features already implemented

- SQLite-backed Prisma database
- real signup/login/logout flow
- JWT session cookies
- protected dashboard routes
- role metadata and verification fields
- newsletter persistence
- social login endpoints
- reset-password and verify-email API routes

## Final production polish recommended

- add real OAuth credentials for Google/GitHub/Microsoft
- add transactional email provider for password reset and verification
- add admin dashboard with role gating
- move from SQLite to Postgres for production scale
- add rate limiting and audit logging
