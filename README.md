# Gian's Portfolio

A single-page personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site presents Gian’s background, professional experience, current skills, projects, and contact links in a responsive dark-themed layout.

## Current sections

- **About Me** — Introduction, personal summary, profile image, and links to the work and contact sections.
- **Experience** — Professional experience, internship experience, client work, and technology highlights.
- **Projects** — Personal Portfolio project card, with space reserved for additional projects.
- **Contact** — Gmail and GitHub buttons.

The sticky header includes responsive navigation and an active-section indicator. Navigation uses smooth scrolling and respects reduced-motion preferences.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- HTML and CSS

## Project structure

```text
src/
  Components/
    Header.tsx       Sticky navigation and active-section indicator
  Layouts/
    AppLayout.tsx    Shared page layout
  Pages/
    AboutMe.tsx      Introduction section
    Experience.tsx   Experience and skills section
    Projects.tsx     Projects section
    Contact.tsx      Contact links section
    Portfolio.tsx    Page composition
  assets/            Profile image and contact icons
  index.css          Tailwind import and global styles
  main.tsx           Application entry point
public/              Static public files
index.html           Vite HTML entry point
vite.config.ts       Vite configuration
```

## Getting started

Requires Node.js 24 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build and preview

```bash
npm run build
npm run preview
```

The production output is generated in `dist/` and can be deployed to a static hosting provider.

## Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```
