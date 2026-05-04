---
name: Cole Codes Portfolio — Project Context
description: Key architecture, file roles, and recurring patterns for the cole-codes portfolio codebase
type: project
---

Single-page Next.js 14 App Router portfolio at colecodes.dev (Vercel). One route (`/`). Six live sections: Header, Hero, Projects, About, Contact, Footer. No backend, no DB, no tests.

**Key file roles:**
- `src/app/layout.tsx` — root layout; fonts (Inter + Calistoga via `next/font/google`), global metadata (description is currently empty)
- `src/app/page.tsx` — composes all sections; no client JS
- `src/sections/Contact.tsx` — full contact form with validation; EmailJS NOT wired up as of 2026-05-03 (form silently drops submissions)
- `src/components/ContactForm.tsx` — dead file, not imported; contains hardcoded EmailJS credentials (service_t4cn2xg / template_cyzfdgm / ZHs_871fM5mduIaVX) that need rotation
- `src/sections/Footer copy.tsx` — dead file (space in name), old footer version
- `src/sections/Testimonials.tsx` — dead file, broken image imports (5 memoji-avatar PNGs that don't exist)
- `src/sections/Tape.tsx` — dead file, not imported
- `src/components/GoogleMaps.tsx` — dead file, uses wrong env var prefix

**Known issues flagged in 2026-05-03 scan (prioritized):**
1. Contact form does nothing on submit (Critical)
2. EmailJS key committed in ContactForm.tsx — rotate immediately (Critical)
3. About.tsx has unnecessary "use client" — no hooks used (High)
4. No `priority`/`sizes` on Hero/Projects images (High)
5. `<a><button>` nesting invalid HTML in Hero + Projects (Medium)
6. No OG/Twitter metadata, no robots.txt, no sitemap (Low)
7. framer-motion + dotenv are unused installed dependencies (Medium)

**Why:** These are the findings from the first full security/perf/quality scan of the codebase.
**How to apply:** When working in this repo, treat these as known debt. Don't re-discover them in future audits unless verifying they've been fixed.
