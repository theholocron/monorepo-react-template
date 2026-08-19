import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			// commitlint.config.ts, eslint.config.ts, prettier.config.ts auto-detected by plugins
			entry: ["holocron.config.ts", "devmoji.config.cjs", "lighthouse.config.cjs"],
			project: ["*.ts", "*.cjs"],
		},
		docs: {
			// astro.config.ts and content.config.ts auto-detected by Astro plugin
			project: ["src/**/*.ts"],
		},
		"packages/*": {
			// src/index.ts, vite.config.ts, vitest.config.ts, eslint.config.ts auto-detected by plugins
			project: ["src/**/*.{ts,tsx}", "*.ts"],
		},
	},
	ignoreDependencies: [
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// loaded at runtime by tsdown / vitest in packages — not a static root import
		"@theholocron/tsdown-config",
		"@theholocron/vitest-config",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// config packages resolved by tool at runtime — not static imports
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
	ignore: ["**/*.astro", "**/*.mdx"],
	ignoreExportsUsedInFile: true,
};

export default config;
