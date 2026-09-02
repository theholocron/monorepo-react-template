import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// commitlint.config.ts, eslint.config.ts, prettier.config.ts auto-detected by plugins
			entry: ["holocron.config.ts"],
			project: ["*.ts", "*.cjs"],
			// standalone tool configs — not imported by project code
			ignoreFiles: ["devmoji.config.cjs", "lighthouse.config.cjs"],
			// astro.config.ts is the docs build config — disable plugin at root to avoid .astro/.mdx hints
			astro: false,
		},
		docs: {
			entry: ["src/content.config.ts"],
			project: ["src/**/*.ts"],
		},
		"packages/*": {
			// src/index.ts, vite.config.ts, vitest.config.ts, eslint.config.ts auto-detected by plugins
			project: ["src/**/*.{ts,tsx}", "*.ts"],
		},
	},
	ignoreDependencies: [
		// resolved at config time via require.resolve for Vite alias — transitive of @theholocron/astro-config
		"@astrojs/react",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// loaded at runtime by tsdown / vitest in packages — not a static root import
		"@theholocron/tsdown-config",
		"@theholocron/vitest-config",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// config packages loaded via config file resolution — not static imports
		"@theholocron/lighthouse-config",
		"@theholocron/prettier-config",
		// v8 coverage provider loaded at runtime by vitest
		"@vitest/coverage-v8",
		// binary tools — invoked via CLI, hooks, or CI scripts
		"alex",
		"chromatic",
		"playwright",
		"sort-package-json",
		"vitest",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
