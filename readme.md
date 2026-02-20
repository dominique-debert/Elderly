# Elderly

Elderly is a web application (client + server) designed to connect and support older adults and their communities. This repository is organized as a monorepo using pnpm workspaces, containing:

- Frontend: client/ (Vite + React + TypeScript + Tailwind)
- Backend: server/ (API and server code)
- Design mockups: mockups/

Quick links:

- Frontend entry: client/index.html
- Example pages/components: client/src/pages/LandingPage.tsx, client/src/components/Layout/Navbar.tsx
- Backend API: server/
- Design mockups: mockups/

## Requirements

- Node.js (LTS)
- pnpm (recommended)
- Git

## Environment

- Frontend env: client/.env (see client/.env.example)
- Backend env: server/.env

## Install & Run (Monorepo)

1. Install dependencies (from the repo root):
   pnpm install

2. Run the frontend dev server (from root):
   pnpm run dev:client

- Open http://localhost:5173 (or the port indicated by Vite)

3. Run the backend server (from root):
   pnpm run dev:server

## Project Layout

- client/ — frontend application (Vite + React + TypeScript)
  - index.html — app entry
  - src/ — source code (pages, components, etc.)
    - pages/LandingPage.tsx — landing page example
    - components/Layout/Navbar.tsx — navigation component
  - .env, .env.example — environment variables
- server/ — backend API and server code
- mockups/ — design assets and HTML snippets used for mockups

## Development Troubleshooting

- Dev server fails to start / port already in use:
  - Check the port (client: Vite default 5173). Kill conflicting process: sudo lsof -t -i:5173 | xargs -r sudo kill -9
  - Or run with a different port: pnpm run dev:client -- --port 5174 (or set VITE_PORT in client/.env)

- Environment vars not loaded:
  - Ensure .env files exist in client/ and server/ and follow .env.example naming.
  - Restart dev servers after editing .env files.

- Missing dependencies / install errors:
  - Delete node_modules and lockfile, then reinstall:
    rm -rf node_modules
    rm -f pnpm-lock.yaml package-lock.json yarn.lock
    pnpm install

- TypeScript or build errors:
  - Check exact error in terminal / IDE. Run type check separately:
    pnpm -F client run typecheck # if available; replace with exact script if different
  - Linting errors may block CI; run:
    pnpm -F client run lint # replace with exact script name from package.json if different

- Server API errors:
  - Check server logs in the terminal where the server is running.
  - Verify required environment variables in server/.env.
  - Confirm DB or external services are reachable (check URLs/credentials).

## Notes

- The frontend uses Tailwind and Vite; check client/package.json for available scripts.
- The backend uses Node.js and TypeScript; check server/package.json for scripts.
- Mockups contain many static HTML snapshots useful for UI reference: mockups/
- Keep secrets out of committed .env files; use provided .env.example files as templates.

## Contributing

- Create feature branches from main, open PRs, and follow repository lint/test rules.
- For UI work, reference the mockups in mockups/.

## License

- See repository license file (if present).

---

This project uses a pnpm monorepo structure. Use root-level scripts for development, and see each package for more details.
