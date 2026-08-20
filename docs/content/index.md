---
title: Overview
description: A modern React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.
---

A pnpm workspace monorepo template for `@theholocron` projects that ship React component libraries — with Storybook for development, Vitest for testing, and Chromatic for visual regression.

## Structure

```
packages/
  package-a/    Stub package (rename or remove)
  package-b/    React component library (Vite + Storybook + Vitest)
```

`package-b` is the primary library package. It includes a `Button` component as a starting point — replace it with your own components.

## What's included

- **React 19** shared across all packages
- **TypeScript** with shared `@theholocron/tsconfig` presets
- **Vite** for building each component library to `dist/`
- **Storybook** in `packages/package-b` — built to `_site/sandbox/package-b/` on deploy for live component previews
- **Vitest** with browser mode (Playwright + Chromium) for Storybook interaction tests and component unit tests
- **Cypress** for end-to-end user-flow tests
- **Chromatic** for visual regression testing (`CHROMATIC_PROJECT_TOKEN` secret)
- **ESLint + Prettier** via shared `@theholocron/eslint-config` and `@theholocron/prettier-config`
- **Turborepo** for task orchestration across packages
- **pnpm workspaces** with catalog pinning for consistent dependency versions
- **semantic-release** with lockstep versioning — all packages share a single version
- **Husky + lint-staged** via `@theholocron/lint-staged-config`
- Full CI/CD via reusable workflows in `theholocron/.github`

## Getting started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new repo from this template:

```bash
npx @theholocron/cli new monorepo-react my-components \
  --description "My component library" \
  --homepage "https://my-components.example.com" \
  --vault doppler \
  --agent claude
```

## Development

```bash
pnpm install               # install all deps
pnpm build                 # build all packages via Turborepo
pnpm test                  # run Storybook interaction + Vitest tests
pnpm test:coverage         # run tests with coverage
pnpm typecheck             # tsc --noEmit in each package
pnpm lint                  # ESLint across all packages
```

To work on a single package:

```bash
pnpm --filter package-b build:storybook   # build Storybook
pnpm --filter package-b test              # run package-b tests only
```
