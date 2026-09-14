# portfolio

Static portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Structure

```text
src/
  Components/       Reusable interface components
  Layouts/          Shared page layouts
  Pages/            Page-level React components
  assets/           Images and static assets
  index.css         Tailwind import and global styles
  main.tsx          Application entry point
index.html          Vite HTML entry point
public/              Files copied directly to the built site
vite.config.ts       Vite and React configuration
```

## Development

Requires Node.js 24 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:5173.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to any static host. No PHP, Laravel, database, API, or server runtime is required.

## Checks

```bash
npm run build
npm run lint
npm run typecheck
```
