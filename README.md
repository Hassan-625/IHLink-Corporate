# IHLink Corporate

Central public website and customer entry point for the IHLink Co. Ltd. ecosystem.

## Platform role

- **Platform key:** `corporate`
- **Frontend:** standalone repository
- **Backend:** shared IHLink Supabase project
- **Administration:** IHLink Command Center
- **Deployment:** Vercel

## Core capabilities

- Corporate homepage and service discovery
- Shared IHLink account registration and authentication
- Customer access to authorized standalone platforms
- Cross-platform handoff and ecosystem navigation
- Managed content, support and contact surfaces
- Central presentation of IHLink services

## Architecture

Corporate is the ecosystem entry point. Specialist applications remain standalone repositories and deployments while sharing the IHLink Supabase backend and central administration.

The frontend uses the shared IHLink authentication and application backend while retaining platform-specific routes, authorization and customer experience.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase
- Vercel

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Where available, run type checking and linting before release:

```bash
npm run typecheck
npm run lint
```

## Environment and secrets

Client configuration is supplied through environment variables such as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, together with platform-origin variables where required for cross-platform handoff.

Never commit service-role keys, payment/provider credentials, webhook secrets, private API keys or production credentials to this repository.

## IHLink ecosystem integration

This platform participates in the shared IHLink account and backend architecture. Access to one platform does not automatically grant access to every IHLink platform. The Command Center provides authorized central oversight while customer-facing applications remain standalone.

## Security

Protected data is governed by Supabase Row Level Security and server-side workflows. Sensitive operations such as payment settlement, privileged administration and account lifecycle actions must be verified server-side.

## Deployment

Production is deployed through the IHLink Vercel team. Production environment variables must be configured in Vercel and releases should be verified after deployment before being treated as live.

## Ownership

**IHLink Co. Ltd.**  
Copyright © 2026 IHLink Co. Ltd. All rights reserved.
