# Current Feature

## Status

Audit / Triage (no active feature)

## Goals

Establish a baseline assessment of the codebase before targeted audits for performance, security, and UI. The follow-on audit work will draw findings from this scan.

## Notes

- No active feature branch is in flight. Working tree is clean as of 2026-05-03 on `main`.
- Recent commits (most recent first): `add claude scaffold`, `darken background, install playwright`, `adjust title in hero`, `remove images, change laptop color`, `fix project padding`.
- The `/loop` and `/feature` workflows have not been used yet on this repo; the spec/research templates in `context/features/` and `context/research/` are still placeholders.

### Audit checklist (raw findings, not yet prioritized)

These are surfaced here as inputs to upcoming performance/security/UI audits.

#### Dead / duplicate code
- `src/sections/Footer copy.tsx` is a near-duplicate of `Footer.tsx` and is not imported anywhere. The filename also contains a space.
- `src/sections/Testimonials.tsx` returns the literal text `"Testimonials Section"` and is not imported.
- `src/sections/Tape.tsx` defines a marquee but is not imported by `app/page.tsx`.
- `src/components/ContactForm.tsx` is the legacy contact form. It is replaced by `src/sections/Contact.tsx` and is not imported.
- `src/components/GoogleMaps.tsx` reads `process.env.GOOGLE_MAPS_API_KEY` (not `NEXT_PUBLIC_*`, so always undefined in the browser) and is not imported.
- `src/assets/images/quin-digital-landing-page.png` and `src/assets/images/wild-olives-30a-landing-page.png` are not referenced by any section.
- `src/assets/icons/arrow-down.svg`, `src/assets/icons/check-circle.svg`, and `src/assets/icons/npm.svg` are not referenced.

#### Security / config
- `src/components/ContactForm.tsx` hardcodes `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` for EmailJS. EmailJS public keys are designed to be exposed client-side, but they should still be moved to `NEXT_PUBLIC_EMAILJS_*` env vars before any new contact-form work to make rotation simple and to keep them out of git history going forward.
- `src/sections/Contact.tsx` validates input but does NOT actually submit anywhere — `onSubmit` only calls `console.log("Form submitted:", values)`. The form looks live to a visitor but silently drops messages.
- `src/components/ContactForm.tsx` (legacy) imports `dotenv` for no reason, and `dotenv` is also a runtime dependency in `package.json`. Next.js loads `.env*` files natively; `dotenv` should be removed from dependencies.
- `metadata.description` in `src/app/layout.tsx` is an empty string. SEO/social shares will be empty.
- No `robots.txt`, no `sitemap.ts`, no Open Graph image, no `viewport` export.
- `.env` is gitignored (good). No `.env.example` exists to document required keys.

#### Performance
- `src/assets/images/` contains very large raster files imported via `next/image`: `linkup-landing-page.png` (≈ 2.9 MB), `wild-olives.png` (≈ 3.1 MB), `my-memoji-computer.png` (≈ 1.5 MB), `my-memoji.png` (≈ 0.8 MB), `new-map.png` (≈ 0.4 MB), `cloud-pulse.png` (≈ 0.3 MB). These get optimized at build time but should still be re-encoded / dimensioned to source size before optimization.
- `src/sections/Hero.tsx` renders 10 `HeroOrbit` instances + 4 `.hero-ring` elements; each orbit nests three `animate-spin` divs. Worth profiling on mid-tier mobile to confirm scroll/jank stays acceptable.
- `framer-motion` is installed (~50 KB gz) but not used anywhere. Remove it from dependencies if it stays unused.
- `dotenv` (~17 KB) is also unused at runtime.
- `react-icons` is used only for `FaGithub` in `Hero.tsx`. The package supports tree-shaking via deep imports (`react-icons/fa/FaGithub`), but using a local SVG (`github.svg` already exists) is even cheaper.

#### UI / UX
- `src/sections/Header.tsx`: the "Home" link `href="#"` causes a small jump on click. Should be `href="/"` or `href="#top"` with a matching `id="top"`.
- The header sits over the hero on mobile and can occlude the memoji on the smallest screens; verify against `sm: 375px`.
- The contact form's "Send Message" button only logs and never resets `values`; users who submit twice see the same data.
- The toast in `Contact.tsx` shows for 4500 ms and is positioned absolutely at `top-24` — confirm it does not obscure form fields on small screens.
- Project accordion uses `setTimeout(..., 50)` before `scrollIntoView`; this is fragile if the open animation is retimed.
- No skip-to-content link or visible focus rings on the hero CTAs (default browser focus is suppressed in some environments by Tailwind reset).

#### Accessibility
- Project hero memoji image alt is "Person peeking from behind laptop" — fine.
- Map decorative `Image` in `About.tsx` has alt "Map showing my location" — acceptable but the inner pulse decoration has none, which is correct (decorative).
- The custom dismiss button in the toast uses `aria-label="Dismiss"` — good.
- Several icon-only buttons (e.g. project GitHub link button) lack any visible label or `aria-label`. They have a child SVG but no accessible name.
- Heading order: page has multiple `h2`s and per-card `h3`s, no `h1` reuse; structure looks OK.

#### Type safety
- `image: any` in the `PortfolioProject` type in `Projects.tsx` should be `StaticImageData` from `next/image`.
- `Card`, `CardHeader`, `SectionHeader`, `ToolboxItems`, `HeroOrbit` all type props inline; that is fine but `PropsWithChildren` is mixed with explicit `children: React.ReactNode` in different files. Pick one and apply consistently.

## History

(none yet)
