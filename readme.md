# Elderly

Elderly is a web application (client + server) designed to connect and support older adults and their communities. This repository includes a frontend client (Vite + React + TypeScript + Tailwind) and a server component.

Quick links:

- Frontend entry: client/index.html
- Frontend package manifest: client/package.json
- Example pages/components: client/src/pages/LandingPage.tsx, client/src/components/Layout/Navbar.tsx
- Design mockups: mockups/
- Backend (API): server/

Requirements

- Node.js (LTS)
- pnpm (recommended) or npm / yarn
- Git

Environment

- Frontend env files: client/.env (use client/.env.example as a template)
- Backend env file: server/.env

Install & run (typical)

1. Install dependencies (from repo root):

   - Using pnpm:
     pnpm install
   - Or for client only:
     cd client
     pnpm install

2. Run the frontend dev server:
   cd client
   pnpm run <client-dev-script> # TODO: replace <client-dev-script> with exact script from client/package.json

   - Open http://localhost:5173 (or the port indicated by Vite)

3. Run the server (see server/ for scripts and instructions):
   cd server
   pnpm install
   pnpm run <server-dev-script> # TODO: replace <server-dev-script> with exact script from server/package.json

Build

- Frontend build (client):
  cd client
  pnpm run <client-build-script> # TODO: replace with exact script from client/package.json
  pnpm run <client-preview-script> # TODO: replace with exact script

Project layout (high level)

- client/ — frontend application (Vite + React + TypeScript)
  - index.html — app entry
  - src/ — source code (pages, components, etc.)
    - src/pages/LandingPage.tsx — landing page example
    - src/components/Layout/Navbar.tsx — navigation component
  - .env, .env.example — environment variables
- server/ — backend API and server code
- mockups/ — design assets and HTML snippets used for mockups

Development troubleshooting (short)

- Dev server fails to start / port already in use:

  - Check the port (client: Vite default 5173). Kill conflicting process: sudo lsof -t -i:5173 | xargs -r sudo kill -9
  - Or run with a different port: pnpm run dev -- --port 5174 (or set VITE_PORT in client/.env)

- Environment vars not loaded:

  - Ensure .env files exist in client/ and server/ and follow .env.example naming.
  - Restart dev servers after editing .env files.

- Missing dependencies / install errors:

  - Delete node_modules and lockfile, then reinstall:
    rm -rf node_modules
    rm -f pnpm-lock.yaml package-lock.json yarn.lock
    pnpm install
  - If using npm or yarn, run the matching install command in that folder.

- TypeScript or build errors:

  - Check exact error in terminal / IDE. Run type check separately:
    cd client
    pnpm run typecheck # if available; replace with exact script if different
  - Linting errors may block CI; run:
    pnpm run lint # replace with exact script name from package.json if different

- Server API errors:
  - Check server logs in the terminal where the server is running.
  - Verify required environment variables in server/.env.
  - Confirm DB or external services are reachable (check URLs/credentials).

Notes

- The frontend uses Tailwind and Vite; check client/package.json for available scripts.
- Mockups contain many static HTML snapshots useful for UI reference: mockups/
- Keep secrets out of committed .env files; use provided .env.example files as templates.

Contributing

- Create feature branches from main, open PRs, and follow repository lint/test rules.
- For UI work, reference the mockups in mockups/.

License

- See repository license file (if present).

To finish:

- Paste the contents of client/package.json and server/package.json here (or allow me to read them) and I will replace the TODOs with the exact pnpm/npm script names and update the README file.
