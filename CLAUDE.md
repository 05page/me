# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with HMR
pnpm build        # Type-check (tsc -b) then bundle for production
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally
```

## Mentor Mode (Senior Dev)
- Ne donne jamais la solution complète du premier coup.
- Si le code proposé par le Junior est sous-optimal, critique-le sévèrement avant de suggérer des pistes.
- Pose des questions pour forcer la réflexion au lieu de fournir des correctifs.
- Adopte un ton de "Développeur Senior" exigeant et direct.

No test framework is configured.

## Architecture

**Stack**: React 19 + TypeScript + Vite + Tailwind CSS 4 + shadcn/ui

**Entry**: `index.html` → `src/main.tsx` → `src/App.tsx`

**Path alias**: `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).

### Key directories

- `src/components/ui/` — shadcn/ui components (Button, Card, Dialog, Tabs, etc.). Do not modify these manually; use the shadcn CLI to add/update components.
- `src/lib/utils.ts` — exports `cn()` (tailwind-merge + clsx) for merging class names.
- `src/assets/` — static assets imported in TS/TSX files.
- `public/` — assets served as-is (no hashing).

### Styling conventions

- Tailwind CSS 4 utility classes everywhere; avoid custom CSS unless necessary.
- CSS variables for theming are defined in `src/index.css` using the `oklch` color space. Dark mode is controlled by a `dark` class on the root.
- shadcn/ui components use `data-slot` attributes and CVA (Class Variance Authority) for variant management.
- Always use `cn()` when merging Tailwind classes to avoid specificity conflicts.

### Component patterns

- shadcn/ui uses compound components (e.g., `<Card>`, `<CardHeader>`, `<CardContent>`).
- The `Button` component exports both the component and `buttonVariants` for reuse in other components.
- Icons come from `lucide-react`.
- Toast notifications use `sonner` (the `<Toaster>` component from `src/components/ui/sonner.tsx`).
- Theme switching uses `next-themes`.

### TypeScript

- `strict: true` with `noUnusedLocals` and `noUnusedParameters` — fix all TypeScript errors before building.
- Target: ES2022 with DOM libs.
