# Project Overview: Cole Codes Portfolio

> **A single-page personal portfolio for Cole Reilly that highlights real-world client work, cloud projects, and provides a direct inbound contact path.**

---

## Table of Contents

1. [Problem & Vision](#1-problem--vision)
2. [Target Users](#2-target-users)
3. [Tech Stack](#3-tech-stack)
4. [Architecture Overview](#4-architecture-overview)
5. [Data Models](#5-data-models)
6. [Features](#6-features)
7. [Page Sections](#7-page-sections)
8. [UI/UX Guidelines](#8-uiux-guidelines)
9. [Monetization](#9-monetization)
10. [URL Structure](#10-url-structure)
11. [Integrations](#11-integrations)
12. [Key Dependencies & Links](#12-key-dependencies--links)

---

## 1. Problem & Vision

Hiring managers, recruiters, and prospective clients need a fast, credible signal that Cole can ship real production work across both the frontend and the AWS cloud. A LinkedIn or resume PDF alone does not show project quality, breadth (frontend, AI, infra), or the tone of how he builds.

| What | Where it ends up today |
|---|---|
| Project case studies (CloudPulse, AI Code Challenge Generator, Wild Olives, LinkUp) | Scattered across separate GitHub repos and live demos |
| Tech stack and engineering principles | Implied from the resume, never explicitly stated |
| Inbound contact path | LinkedIn DMs / direct email |

**Cole Codes Portfolio** solves this with one polished single-page site that surfaces selected work, tech stack, principles, and a direct contact form.

---

## 2. Target Users

| Persona | Core Need |
|---|---|
| **Recruiter / Hiring Manager** | Quickly assess production experience, tech breadth, and live work |
| **Prospective Client** | Confirm capability for real builds (web app, AWS cloud, WordPress) and reach out |
| **Peer Engineer** | Browse implementation depth via GitHub links and project write-ups |

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 (strict mode) |
| **Database** | None |
| **ORM / DB Layer** | None |
| **Auth** | None |
| **File Storage** | None (static assets imported from `src/assets`) |
| **AI / ML** | None |
| **CSS / Styling** | Tailwind CSS 3 + custom CSS variables in `globals.css` |
| **Components** | Hand-built (`src/components`), no UI library |
| **Animation** | Framer Motion (installed but currently unused), CSS keyframes in `tailwind.config.ts` |
| **Icons** | `react-icons` (FaGithub) + local SVGs via `@svgr/webpack` |
| **Caching** | None beyond Next.js + Vercel defaults |
| **Payments** | None |
| **Testing** | None configured |
| **Hosting** | Vercel |

> **Styling rule:** Tailwind 3 with a custom dark color palette defined as CSS variables in `src/app/globals.css` and surfaced as utilities (`bg-main`, `bg-panel`, `text-main`, `text-muted`, `border-soft`, etc.). Use these utilities instead of hardcoded hex values whenever possible.

> **SVG rule:** SVG imports are routed through `@svgr/webpack` in `next.config.mjs`. Default `import Foo from './foo.svg'` returns a React component; use `import url from './foo.svg?url'` to get a URL string instead.

---

## 4. Architecture Overview

```
                ┌───────────────────────────────────────────────┐
                │  Browser (Vercel-hosted static + RSC payload) │
                └───────────────────────────────────────────────┘
                                   │
                                   ▼
              ┌────────────────────────────────────────┐
              │  Next.js 14 App Router (src/app)       │
              │                                        │
              │   layout.tsx ── fonts, body theme      │
              │   page.tsx  ── single route '/'        │
              │     ├─ <Header/>          (server)     │
              │     ├─ <HeroSection/>     (server)     │
              │     ├─ <ProjectsSection/> 'use client' │
              │     ├─ <AboutSection/>    'use client' │
              │     ├─ <ContactSection/>  'use client' │
              │     └─ <Footer/>          (server)     │
              └────────────────────────────────────────┘
                                   │
                                   ▼
                      ┌────────────────────────┐
                      │  EmailJS (browser SDK)  │  ← intended; not wired up in
                      │  service / template /   │    Contact.tsx (only console.log)
                      │  public key             │
                      └────────────────────────┘
```

No server-side data fetching, no API routes, no middleware. All state is local to client components.

---

## 5. Data Models

There is no database. The closest things to data models are local TypeScript types in section files:

```ts
// src/sections/Projects.tsx
type PortfolioProject = {
  company: string;
  year: string;
  title: string;
  techStack?: string;
  focus?: string[];
  results: { title: string }[];
  more?: string[];
  link?: string;
  linkLabel?: string;
  image: any;          // next/image StaticImport — should be tightened
  github?: string;
  hideLinkButton?: boolean;
};

// src/sections/Contact.tsx
type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormValues, string>>;
```

Project data lives inline in `src/sections/Projects.tsx` as `portfolioProjects: PortfolioProject[]`. The toolbox grid in `src/sections/About.tsx` uses an inline `toolboxItems` array.

---

## 6. Features

### Core Features (All Visitors)

- **Hero section** with animated orbiting icons (`HeroOrbit` + custom keyframes), memoji image, status pill, and primary GitHub / Resume CTAs.
- **Featured Projects** with expandable per-project accordions covering CloudPulse (AWS ECS + Terraform), AI Code Challenge Generator (FastAPI + OpenAI), Wild Olives 30A, and LinkUp Solutions.
- **About section** with a dual-direction marquee of toolbox tech icons, a static map card, and an "Engineering Principles" list.
- **Contact form** with client-side validation (required fields, regex for email/phone) and a transient toast for missing fields.
- **Footer** with Resume / LinkedIn / GitHub external links.
- **In-page anchor navigation** via the fixed header (`#Projects`, `#About`, `#Contact`) and `html { scroll-behavior: smooth }`.

### Currently Inactive / Not Wired Up

- **EmailJS submission**: `src/components/ContactForm.tsx` (legacy) hardcodes the EmailJS service/template/public keys. The active `src/sections/Contact.tsx` only `console.log`s the form values. They have not been merged.
- **Google Maps preview**: `src/components/GoogleMaps.tsx` reads `process.env.GOOGLE_MAPS_API_KEY` (no `NEXT_PUBLIC_` prefix, so undefined in the browser) and is not imported anywhere.
- **Testimonials section**: `src/sections/Testimonials.tsx` returns the literal text "Testimonials Section" and is not imported.
- **Tape section**: `src/sections/Tape.tsx` defines a marquee of adjectives, also not imported.

---

## 7. Page Sections

| Section | File | Client/Server | Notes |
|---|---|---|---|
| Header | `src/sections/Header.tsx` | Server | Fixed top nav, anchor links to `#Projects`, `#About`, `#Contact`. The "Home" link points to `#`. |
| Hero | `src/sections/Hero.tsx` | Server | 10 `<HeroOrbit>` instances, 4 concentric `.hero-ring` divs, grain texture overlay, GitHub + external Resume CTA. |
| Projects | `src/sections/Projects.tsx` | Client | Renders `portfolioProjects[]` as `<Card>`s with read-more accordion (uses `grid-template-rows` transition). |
| About | `src/sections/About.tsx` | Client | Two `<ToolboxItems>` marquees (left/right), location card, principles list. |
| Contact | `src/sections/Contact.tsx` | Client | Local form state, regex validation, toast on error, currently does NOT submit anywhere. |
| Footer | `src/sections/Footer.tsx` | Server | External Resume / LinkedIn / GitHub links. A `Footer copy.tsx` duplicate also lives in the same folder. |

---

## 8. UI/UX Guidelines

### Design Principles

- Dark theme only. No light mode toggle.
- High contrast, generous spacing, single accent gradient (`from-emerald-300 to-sky-400`) used consistently for eyebrows, accents, and the location pulse.
- Glassmorphism: translucent panels (`bg-white/[0.03]` to `bg-white/[0.04]`) with `backdrop-blur` and 1px white-alpha borders.
- Subtle motion only: looping marquees, ping pulses, hover lifts. Avoid distracting, scroll-locked, or bounce-heavy effects.
- Type pairing: `Inter` (sans, body / UI) and `Calistoga` (serif, h1/h2/h3) loaded via `next/font/google`.

### Color Tokens

Defined as CSS variables in [src/app/globals.css](src/app/globals.css):

```
--bg-main: #0a0a0a
--bg-panel: #161616
--bg-panel-2: #1f1f1f
--text-main: #e7eaf0
--text-muted: rgba(231, 234, 240, 0.68)
--text-soft: rgba(231, 234, 240, 0.45)
--border-soft: rgba(255, 255, 255, 0.08)
--border-strong: rgba(255, 255, 255, 0.14)
--accent-1: #34d399  (emerald-400)
--accent-2: #60a5fa  (sky-400)
```

### Layout

```
┌──────────────────────────────────────┐
│  Header (fixed top, pill nav)        │
├──────────────────────────────────────┤
│                                      │
│  HeroSection                         │
│   ─ orbits + memoji + name pill      │
│   ─ h1, lede, GitHub + Resume CTAs   │
│                                      │
├──────────────────────────────────────┤
│  ProjectsSection (#Projects)         │
│   ─ Eyebrow / h2 / lede              │
│   ─ Card per project (image + copy)  │
│     ─ accordion: "Read More"         │
├──────────────────────────────────────┤
│  AboutSection (#About)               │
│   ─ Toolbox marquee card             │
│   ─ Map card                         │
│   ─ Principles card                  │
├──────────────────────────────────────┤
│  ContactSection (#Contact)           │
│   ─ Form card (name/company/email/   │
│     phone/message + Send button)     │
├──────────────────────────────────────┤
│  Footer                              │
│   ─ Resume / LinkedIn / GitHub       │
└──────────────────────────────────────┘
```

### Breakpoints

Configured in [tailwind.config.ts](tailwind.config.ts):

- `sm`: 375px
- `md`: 768px
- `lg`: 1200px
- Container is centered with `1rem` / `2rem` md padding and capped at `lg:max-w-5xl` via a custom `.container` utility in `globals.css`.

### Micro-interactions

- Hero name pill has an emerald `animate-ping-large` halo (custom keyframe).
- Toolbox rows scroll left/right via `animate-move-left` / `animate-move-right` (custom keyframes).
- Project cards lift on hover (`hover:-translate-y-1`) and brighten the border.
- Project accordion animates `grid-template-rows` from `0fr` to `1fr` for height + opacity fade-in (no JS height measurement needed).
- Contact toast fades + slides on `toastOpen` and auto-dismisses after 4500ms.

---

## 9. Monetization

Not applicable. The site is a personal portfolio with no paid tiers, no payments, and no gated content.

---

## 10. URL Structure

```
/                          → Single-page portfolio (all sections)
/#Projects                 → Anchor: ProjectsSection
/#About                    → Anchor: AboutSection
/#Contact                  → Anchor: ContactSection
```

External destinations linked from the page:

```
https://github.com/colecodesdev/                 → GitHub profile (Hero CTA, Footer)
https://coltonresume.com/                        → Resume site (Hero CTA, Footer)
https://www.linkedin.com/in/colecodes/           → LinkedIn (Footer)
https://github.com/colecodesdev/cloud-pulse      → CloudPulse repo
https://github.com/colecodesdev/code-challenge-generator → Code Challenge repo
https://d1tsfobuj7g5p2.cloudfront.net/           → Code Challenge live demo
https://github.com/colecodesdev/wild-olives      → Wild Olives repo
https://d6uiwxps2u5ue.cloudfront.net/            → Wild Olives live demo
https://linkupsolutions.us/                      → LinkUp client site
```

---

## 11. Integrations

| Integration | Purpose | Trigger | Status |
|---|---|---|---|
| EmailJS (`@emailjs/browser`) | Forward contact form messages to email | Form submit (intended) | **Not wired up** in the active `Contact.tsx`; legacy `ContactForm.tsx` has hardcoded keys |
| Google Maps | Render location pin in About | Component mount | **Not wired up**; `GoogleMaps.tsx` is unused and reads a non-public env var |
| `next/font/google` | Load Inter + Calistoga fonts | Build/runtime | Active in `layout.tsx` |
| Vercel | Hosting + deploy | Push to `main` | Active |

Integration notes:

- The EmailJS public key, service ID, and template ID in `src/components/ContactForm.tsx` are committed to the repo. EmailJS public keys are designed to be exposed in client code, but they should still be moved to `NEXT_PUBLIC_*` env vars to make rotation easier and to keep the legacy file from drifting further from the active form.
- `dotenv` is listed as a runtime dependency in `package.json` but Next.js loads `.env*` files natively. The dependency is unused.

---

## 12. Key Dependencies & Links

### Documentation

| Tool | Link |
|---|---|
| Next.js (App Router) | https://nextjs.org/docs/app |
| React 18 | https://react.dev/ |
| Tailwind CSS 3 | https://tailwindcss.com/docs |
| Framer Motion | https://www.framer.com/motion/ |
| `@svgr/webpack` | https://react-svgr.com/docs/webpack/ |
| EmailJS Browser SDK | https://www.emailjs.com/docs/sdk/installation/ |
| `react-icons` | https://react-icons.github.io/react-icons/ |
| `tailwind-merge` | https://github.com/dcastil/tailwind-merge |
| Vercel | https://vercel.com/docs |

### Key Packages

```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@svgr/webpack": "^8.1.0",
    "dotenv": "^17.0.1",
    "framer-motion": "^11.3.21",
    "next": "^14.2.30",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.5.0",
    "tailwind-merge": "^2.4.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.20",
    "eslint": "^8",
    "eslint-config-next": "14.2.5",
    "postcss": "^8",
    "prettier": "^3.6.2",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.8.3"
  }
}
```

### Setup

```bash
git clone <repo>
cd cole-codes
npm install
npm run dev          # http://localhost:3000
```

### Build / Deploy

```bash
npm run build        # next build
npm run start        # serve the production bundle locally
# Production deploys are pushed automatically by Vercel on commits to main.
```

---

*Last updated: 2026-05-03*
