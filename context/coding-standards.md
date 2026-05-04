# Coding Standards

Rules for the Cole Codes portfolio (Next.js 14 App Router + React 18 + TypeScript + Tailwind CSS 3).

## Language

- TypeScript strict mode is on (`tsconfig.json` -> `"strict": true`). Do not relax it.
- No `any`. The one current exception is `image: any` in the `PortfolioProject` type in `src/sections/Projects.tsx`; new code should type images as `import { type StaticImageData } from "next/image"`.
- Prefer `type` aliases for object shapes used locally (matches the existing pattern in `Contact.tsx` and `Projects.tsx`). Reserve `interface` for things meant to be extended.
- Type inference is fine for obvious values; add explicit types on public function signatures, props, and exported values.

## Framework (Next.js 14, App Router)

- Server components are the default. Only add `"use client"` when a section needs hooks, browser APIs, or event handlers (current client components: `Projects.tsx`, `About.tsx`, `Contact.tsx`).
- This project has no server actions, no API routes, and no middleware. Do not introduce them without a clear reason: the site is fully static apart from the contact form, which posts directly to EmailJS from the client.
- All routes live under `src/app/`. The site currently has a single route (`/`) that composes section components from `src/sections/`. Keep new pages under `src/app/<route>/page.tsx`.
- Use `next/image` for raster images and let the imported `StaticImageData` provide width/height. Do not use raw `<img>` tags.
- Use `next/font/google` from `layout.tsx` for fonts. Do not link Google Fonts via `<link>` tags.
- Configure SVG handling only through the existing webpack rules in `next.config.mjs`. Default `import Foo from './foo.svg'` -> React component; `import url from './foo.svg?url'` -> URL string.

## Styling (Tailwind CSS 3)

- Tailwind v3, JS config (`tailwind.config.ts`). Do not migrate to v4 / CSS-config without explicit approval.
- Custom breakpoints override the defaults: `sm: 375px`, `md: 768px`, `lg: 1200px`. The `.container` is capped at `lg:max-w-5xl` via a layer utility in `globals.css`.
- Color tokens are CSS variables defined in `src/app/globals.css` and re-exposed as Tailwind utilities (`bg-main`, `bg-panel`, `bg-panel-2`, `text-main`, `text-muted`, `text-soft`, `border-soft`, `border-strong`). Use these instead of hardcoded hex values.
- The accent gradient is always `from-emerald-300 to-sky-400`. Reuse it; do not introduce additional accent colors.
- Glass surfaces use `border border-white/10 bg-white/[0.03..0.04] backdrop-blur-sm`. Match this when building new cards/panels.
- Custom keyframes (`ping-large`, `move-left`, `move-right`) and animations live in `tailwind.config.ts`. Add new motion there, not as inline style strings.
- When merging conditional class strings, use `twMerge` from `tailwind-merge` (already a dependency). The `Card`, `CardHeader`, `HeroOrbit`, and `ToolboxItems` components all use this pattern.

## File Organization

- Page sections (composed by `app/page.tsx`): `src/sections/<Name>.tsx`
- Reusable UI primitives: `src/components/<Name>.tsx`
- Static SVG icons (imported as React components): `src/assets/icons/<name>.svg`
- Static raster images: `src/assets/images/<name>.{png,jpg}`
- App Router entry, layout, global CSS: `src/app/`
- Project documentation, specs, research prompts: `context/`

There is no `src/lib`, `src/types`, or `src/actions` today. If a small utility is needed, prefer collocating it with its single consumer until it is shared by 2+ files, then promote to `src/lib/<name>.ts`.

## Naming

- Components: `PascalCase` (e.g. `HeroOrbit`, `SectionHeader`).
- Files: match the component name (`HeroOrbit.tsx`). Avoid spaces in filenames; the existing `Footer copy.tsx` is a leftover that should be removed.
- Functions / variables: `camelCase`.
- Constants (module-level config): `SCREAMING_SNAKE_CASE` for true constants (e.g. `SERVICE_ID`), `camelCase` arrays/objects for inline data (`portfolioProjects`, `toolboxItems`, `principles`).
- Types / type aliases: `PascalCase`.
- Anchor IDs used by the in-page nav are `PascalCase` (`#Projects`, `#About`, `#Contact`). Match this convention so the header links keep working.

## Database

Not applicable. There is no database in this project. If one is ever added, document the chosen ORM and migration policy here before writing schema code.

## Data Fetching

- The portfolio is fully static today. Project content is stored as inline arrays in section files (`portfolioProjects` in `Projects.tsx`, `toolboxItems` / `principles` in `About.tsx`).
- Do not add client-side `fetch`, SWR, React Query, or server actions without a clear use case (and update this section if you do).
- The contact form (`Contact.tsx`) is the one form on the site. When wiring it to EmailJS, validate inputs locally first (the existing regex checks for email/phone) before invoking the SDK, and surface errors via the existing toast pattern rather than `alert()`.

## Error Handling

- Use the existing toast pattern in `Contact.tsx` for user-visible failures (no `alert()`, no `confirm()` — the legacy `ContactForm.tsx` uses `alert()` and should be replaced or deleted).
- For network/SDK calls (EmailJS), `try`/`catch` around the call, set an error message in component state, and surface it through the toast.
- Never swallow errors silently in `catch` blocks. At minimum log to `console.error` during development.

## Accessibility

- Every interactive element needs a label or accessible text. The existing dismiss button in `Contact.tsx` uses `aria-label="Dismiss"`; follow the same pattern for icon-only controls.
- The project accordion in `Projects.tsx` already wires up `aria-expanded` / `aria-controls`. Reuse this pattern for any future expandable section.
- The contact toast uses `aria-live="polite"`. Keep that for any non-modal status updates.
- External links open in new tabs and pair `target="_blank"` with `rel="noreferrer"` (or `noopener`). Match this on every new external link.

## Testing

- **Framework:** none configured today.
- **Scope:** there are no automated tests. Verify changes manually in the browser at `http://localhost:3000` against `sm` (375), `md` (768), and `lg` (1200) breakpoints.
- **File pattern:** N/A.
- **Run:** `npm run lint` and `npm run type-check` before committing.

If automated tests are introduced later, document the framework, file pattern, and run command in this section.

## Code Quality

- No commented-out code unless explicitly requested.
- No unused imports, variables, or props (ESLint will catch most of these).
- Keep functions under 50 lines when possible. If a section grows past ~150 lines of JSX, extract child components into `src/components/`.
- Do not commit secrets. EmailJS public keys are not strictly secret but should still move to `NEXT_PUBLIC_EMAILJS_*` env vars (current legacy file hardcodes them inline).
- Leftover/duplicate files (e.g. `src/sections/Footer copy.tsx`) should be deleted in their own commit, not silently refactored.
- Avoid heavy raster assets. Existing files in `src/assets/images/` range from ~120KB to ~3MB; new images should be compressed and ideally width-capped to the largest size they ever render.
- Prefer `next/image` over `<img>`, and `next/font` over `<link>`.
