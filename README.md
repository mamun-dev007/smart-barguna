# Smart Barguna

Smart Barguna is a monorepo for a district information and public services platform for Barguna, Bangladesh. This repository currently contains the Step 1 setup: workspace scaffolding, tooling, a starter web page, a starter mobile page, a health-check API, and a shared TypeScript package. Application features are not implemented yet.

## Architecture

- npm workspaces at the repository root (`apps/*`, `packages/*`).
- Each app is an independent workspace with its own scripts and TypeScript configuration.
- `packages/shared` is intended for types, constants, and schemas used by all apps.
- The existing Capacitor Android project lives at the repository root and is preserved as-is. It is not yet wired to the mobile app build output.

## Folder structure

```
smart-barguna/
├─ apps/
│  ├─ web/          Next.js website (App Router, src/)
│  ├─ mobile/       React + Vite mobile web app (Capacitor-ready)
│  └─ api/          Express + TypeScript API
├─ packages/
│  └─ shared/       Shared types, constants and Zod schemas
├─ android/         Capacitor native Android project (existing, unchanged)
├─ docs/            Project documentation
├─ backend/         Legacy empty folder (preserved)
├─ frontend/        Legacy empty folder (preserved)
├─ capacitor.config.ts
├─ tsconfig.base.json
├─ package.json
└─ package-lock.json
```

## Technology stack

| Area | Stack |
| --- | --- |
| Web | Next.js 16, React 19, TypeScript, Tailwind CSS 4, ESLint |
| Mobile | React 19, Vite 8, TypeScript, Tailwind CSS 4, React Router 8, Lucide React |
| API | Node.js, Express 5, TypeScript, tsx, Zod, dotenv, cors, helmet |
| Shared | TypeScript, Zod |
| Native | Capacitor 8 / Android (existing project) |

## Installation

Use Node.js 22.12 or newer (Vite 8 requires `^20.19.0 || >=22.12.0`).

```bash
cd smart-barguna
npm install
```

No separate install is needed inside each app; npm workspaces handle linking. Do not run `npm ci` unless the lockfile has been intentionally refreshed with `npm install`.

## Development commands

Run one app at a time from the repository root:

```bash
npm run dev:web       # Next.js on http://localhost:3000
npm run dev:mobile    # Vite on http://localhost:5173
npm run dev:api       # Express on http://localhost:5000
```

`npm run dev` starts every workspace that has a `dev` script. The API health endpoint is `GET /api/health`.

## Build and typecheck

```bash
npm run typecheck     # typecheck shared, web, mobile, api
npm run typecheck:web
npm run typecheck:mobile
npm run typecheck:api
npm run typecheck:shared

npm run build         # build shared, web, mobile, api (in that order)
npm run build:web
npm run build:mobile
npm run build:api
npm run build:shared
```

Workspace-scoped commands also work directly, for example:

```bash
npm run build --workspace=@smart-barguna/api
npm run dev --workspace=apps/api
```

## Environment variables

The API reads `PORT`, `NODE_ENV`, and `CLIENT_URL`. Copy the example file and adjust values locally:

```bash
cp apps/api/.env.example apps/api/.env
```

| Variable | Example | Purpose |
| --- | --- | --- |
| `PORT` | `5000` | API listen port |
| `NODE_ENV` | `development` | Runtime mode |
| `CLIENT_URL` | `http://localhost:3000` | Allowed CORS origin |

There is no root `.env.example`: only the API needs environment variables right now, and its example is kept next to the code that uses it. Real `.env` files are ignored by Git; never commit secrets.

## Git basics

```bash
git status
git add <files>
git commit -m "description"
git log --oneline -5
```

Keep native Android files and generated build output out of commits unless intentionally changed. Build outputs (`dist/`, `.next/`, `build/`, `coverage/`) and `.tsbuildinfo` files are ignored.

## Current setup notes

- `capacitor.config.ts` still points `webDir` at `www`; the mobile Vite build currently outputs to `dist/`. No Capacitor config or Android project changes have been made yet.
- No Supabase integration or application business features are present.
