# Current Feature

## Status

Audit Sweep Complete (2026-05-03)

## Goals

Land every actionable finding from the 2026-05-03 code scan in a single pass. Verify with `npm run type-check`, `npm run lint`, and `npm run build`.

## Notes

- Full report: [context/research/code-scan-2026-05-03.md](research/code-scan-2026-05-03.md). The "Status" section at the top of that file enumerates how each Critical/High/Medium/Low item was resolved.
- Build verified end-to-end. Production bundle: `/` is 115 KB First Load JS, plus auto-served `/robots.txt` and `/sitemap.xml`.
- Working tree on `main` (not branched — this was a rolling cleanup pass, not a feature). Will need a single commit before pushing.

### What landed

**Removals**
- Deleted: `src/sections/Contact.tsx`, `src/sections/Footer copy.tsx`, `src/sections/Testimonials.tsx`, `src/sections/Tape.tsx`, `src/components/ContactForm.tsx`, `src/components/GoogleMaps.tsx`.
- Deleted assets: `quin-digital-landing-page.png`, `wild-olives-30a-landing-page.png`, `arrow-down.svg`, `check-circle.svg`, `npm.svg`.
- Removed Contact link from header and Contact section from `page.tsx`.
- Uninstalled: `@emailjs/browser`, `framer-motion`, `dotenv`. Bumped `next` to `14.2.35`.

**New files**
- `src/components/GradientText.tsx`: shared eyebrow / accent gradient text primitive.
- `src/components/TechIconDefs.tsx`: single SVG `<defs>` for the toolbox icon gradient (renders once in `AboutSection`).
- `src/app/robots.ts`, `src/app/sitemap.ts`: Next.js file-based metadata routes.

**Behavioral / a11y / perf changes**
- Hero memoji has `priority` + `sizes`; project card images, map image, and About memoji all have `sizes`.
- `<a><button>` nesting collapsed to single `<a>` styled as a button in Hero (GitHub, Resume) and Projects (Live Demo).
- All `target="_blank"` links now use `rel="noopener noreferrer"`.
- Project GitHub icon links have `aria-label="View {title} on GitHub"`.
- Header "Home" `href="#"` → `href="/"`. Header is now a `<header>` element with `<nav aria-label="Primary">`.
- `<main id="main">` wraps the sections; skip-to-content link is the first focusable element on the page.
- `prefers-reduced-motion` media query in `globals.css` disables animations and smooth scroll.
- `HeroOrbit`: extracted `HeroOrbitProps` type, dropped `PropsWithChildren`, conditional inline `animationDuration` (only set when actually animating).
- `TechIcon` no longer renders duplicate `<linearGradient id="tech-icon-gradient">` (was rendering 26 of them).

**Type / quality**
- `PortfolioProject.image` typed as `StaticImageData`.
- `[...new Array(2)].fill(0)` → `Array.from({ length: 2 })` in `ToolboxItems`.
- About-section toolbox mask extracted to `horizontalFadeMask` const.

**SEO / config**
- `layout.tsx`: real `description`, `metadataBase`, `viewport` (with `themeColor`), OpenGraph, Twitter card, canonical, robots.
- `next.config.mjs`: `images.formats: ['image/avif', 'image/webp']`, security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
- `tailwind.config.ts`: full font fallback stacks for sans/serif; comment documenting the intentional breakpoint override.
- Dynamic copyright line in Footer.

### Carry-over for a separate pass

- **Manual: rotate the leaked EmailJS public key (`ZHs_871fM5mduIaVX`) in the EmailJS dashboard.** The file is gone but the key is permanent in git history.
- **`npm audit` still reports 9 vulnerabilities** (postcss/picomatch via Next.js, plus a Next.js Server Components DoS). All require `npm audit fix --force`, which upgrades to Next.js 16 (breaking). Schedule as its own upgrade effort.
- **Two cosmetic warnings** from `npm run build`: (1) `sharp` recommended for image optimization (Vercel installs it automatically in production), (2) `caniuse-lite` outdated (`npx update-browserslist-db@latest` to refresh).

## History

- **2026-05-03 — Baseline audit + sweep:** populated `context/` templates with real project info; ran code-scanner agent; deleted contact form (and wiring) plus four other dead section/component files and five unused assets; uninstalled three unused deps; bumped Next.js to 14.2.35; resolved every High/Medium/Low item from the scan; added robots/sitemap, OG/Twitter metadata, viewport with themeColor, security headers, AVIF/WebP, prefers-reduced-motion, skip-to-content, `<header>`/`<main>` landmarks. Build, lint, and type-check all green.
