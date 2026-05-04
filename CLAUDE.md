# Cole Codes Portfolio

Personal portfolio site for Cole Reilly (Colton Reilly), a single-page Next.js App Router site at https://colecodes.dev that showcases real-world client work and includes a contact form for inbound inquiries.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/current-feature.md

## Commands

- `npm run dev`: start Next.js dev server (default port 3000)
- `npm run build`: production build
- `npm run start`: run the production build locally
- `npm run lint`: run `next lint` (ESLint with `next/core-web-vitals`)
- `npm run format`: format the repo with Prettier
- `npm run type-check`: run `tsc --noEmit`

There is no automated test runner configured in this repo.

## Hosting & Deployment

- Hosted on Vercel (production domain: `colecodes.dev`).
- Deploys are triggered by pushes to `main` (no CI workflow lives in the repo).
- No backend services. The contact form is intended to submit through EmailJS from the browser.

## Repository Layout

- `src/app/`: App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/sections/`: Top-level page sections composed by `app/page.tsx` (Header, Hero, Projects, About, Contact, Footer).
- `src/components/`: Reusable UI primitives (Card, CardHeader, SectionHeader, HeroOrbit, ToolboxItems, TechIcon, plus legacy ContactForm and GoogleMaps).
- `src/assets/icons/`: SVGs imported as React components via SVGR.
- `src/assets/images/`: PNG/JPG assets imported via `next/image`.
- `context/`: Project documentation, feature specs, and research prompts (not shipped).
- `public/`: Static assets served at the root URL (currently only Next.js/Vercel default SVGs).

## Path Aliases

- `@/*` resolves to `./src/*` (configured in `tsconfig.json`).
