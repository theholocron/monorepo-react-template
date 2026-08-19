# `@theholocron/monorepo-react-template`

<!-- holocron:description -->

A modern React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

<!-- holocron:template-only -->

## Getting Started

Use the [Holocron CLI](https://github.com/theholocron/holocron) to scaffold a new React component library monorepo. It clones the template, renames all placeholder references, wires up your vault provider, and runs `holocron setup` in one step:

```bash
npx @theholocron/cli new monorepo-react my-monorepo \
  --description "My component library description" \
  --homepage "https://my-monorepo.example.com" \
  --vault doppler \
  --agent claude
```

This will:

1. Create `theholocron/my-monorepo` from this template on GitHub
2. Replace all `monorepo-react-template` references with `my-monorepo` throughout the repo
3. Run `pnpm install`
4. Run `holocron setup` to configure branch protection, labels, workflows, and repo settings

<!-- /holocron:template-only -->

## Development

This repo uses [pnpm workspaces](https://pnpm.io/workspaces) with [Turborepo](https://turbo.build/repo) for task orchestration.

```bash
pnpm install       # install all deps
pnpm build         # build all packages
pnpm test          # test all packages
pnpm typecheck     # typecheck all packages
pnpm lint          # lint all packages
```

## What's Included

| Tool                                                    | Purpose                     |
| ------------------------------------------------------- | --------------------------- |
| [React](https://react.dev)                              | UI component framework      |
| [TypeScript](https://www.typescriptlang.org)            | Type safety                 |
| [Vite](https://vite.dev)                                | Library bundler             |
| [Vitest](https://vitest.dev)                            | Test runner with coverage   |
| [Storybook](https://storybook.js.org)                   | Component development       |
| [ESLint](https://eslint.org)                            | Linting                     |
| [Prettier](https://prettier.io)                         | Formatting                  |
| [Turborepo](https://turbo.build/repo)                   | Monorepo task orchestration |
| [pnpm workspaces](https://pnpm.io/workspaces)           | Package management          |
| [semantic-release](https://semantic-release.gitbook.io) | Automated releases          |

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.
