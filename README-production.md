# Production deployment guide

## Required environment variables

Copy `.env.production.example` to a real production `.env` or add the same values inside the deployment platform environment settings.

## Recommended deploy target

Use Vercel for the fastest deployment of this Next.js app.

## Vercel setup

1. Import the GitHub repository.
2. Set framework to Next.js.
3. Add environment variables from `.env.production.example`.
4. Deploy.

## Database advice

For production, use Postgres instead of SQLite. Update `DATABASE_URL` to a hosted Postgres connection string.

## Auth advice

- keep `JWT_SECRET` long and secret
- configure OAuth client IDs and secrets for Google, GitHub, and Microsoft
- add a real transactional email provider for verification and password reset

## Run locally

```bash
npm install
node .\node_modules\next\dist\bin\next dev
```

## Build check

```bash
node .\node_modules\next\dist\bin\next build
```
