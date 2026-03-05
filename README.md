# Cole Codes (Portfolio)

## Overview

This repository contains my personal portfolio site, built as a single-page, section-based experience using the Next.js App Router. It highlights selected real-world client work and portfolio projects, and includes a working contact form for inbound inquiries.

The site is intentionally simple: one primary route (`/`) composed of sections (Hero, Projects, About, Contact, Footer) with smooth in-page navigation.

---

## Live Site

- Public URL: https://colecodes.dev  
- Hosting: Vercel

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion (UI animation)

### Integrations
- EmailJS (contact form submission)

### Tooling
- ESLint
- Prettier
- `tailwind-merge`

---

## Architecture Summary

### App Structure
- `src/app` uses the Next.js App Router.
- The homepage is assembled from section components:
  - `Header`
  - `HeroSection`
  - `ProjectsSection`
  - `AboutSection`
  - `ContactSection`
  - `Footer`

### SVG Handling
- SVG imports are configured so:
  - `*.svg?url` loads as a URL
  - regular `*.svg` imports load as React components (SVGR)

---

## Local Development

### Requirements
- Node.js + npm

### Install
```bash
npm install