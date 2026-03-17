# Portfolio — Sandeep Poloju

Clean, low-motion developer portfolio (recruiter- and hiring-manager friendly). Built with React, Vite, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Project structure

- **`src/sections/`** — Page sections (Hero, About, Skills, Experience, Education, Projects, Contact).
- **`src/pages/`** — Home (single-page with all sections) and ProjectDetail (template for `/projects/:slug`).
- **`src/components/`** — Reusable UI (Navbar, Button, Section, Card).
- **`src/data/`** — Content constants: `site.ts`, `experience.ts`, `education.ts`, `skills.ts`, `projects.ts`. Edit these to update copy; `profile_context.md` in the repo root is the source of truth for content.

## Resume

The "Download Resume" button points to `/resume.pdf`. 

## Tech

- React 18, Vite, TypeScript, Tailwind CSS, React Router.
- Responsive (mobile, tablet, desktop, large screens), accessible (semantic HTML, focus states, skip link, reduced-motion support).
