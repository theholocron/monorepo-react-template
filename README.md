# `@theholocron/monorepo-react-template`

<!-- holocron:description -->

A modern NodeJS template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.

<!-- /holocron:description -->

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
| [TypeScript](https://www.typescriptlang.org)            | Type safety                 |
| [tsdown](https://tsdown.dev)                            | Library bundler             |
| [Vitest](https://vitest.dev)                            | Test runner with coverage   |
| [ESLint](https://eslint.org)                            | Linting                     |
| [Prettier](https://prettier.io)                         | Formatting                  |
| [Turborepo](https://turbo.build/repo)                   | Monorepo task orchestration |
| [pnpm workspaces](https://pnpm.io/workspaces)           | Package management          |
| [semantic-release](https://semantic-release.gitbook.io) | Automated releases          |

## Releases

Releases are automated via [semantic-release](https://semantic-release.gitbook.io) on push to `main`. All packages are versioned and published in lockstep. See [CHANGELOG.md](CHANGELOG.md) for the release history.

## Documentation

Check out [The Holocron Archive](https://docs.theholocron.dev/projects/monorepo-react-template/) for more information.
