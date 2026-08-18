import type { KnipConfig } from "knip";

const config: KnipConfig = {
	workspaces: {
		".": {
			entry: ["commitlint.config.ts", "eslint.config.ts", "holocron.config.ts", "prettier.config.ts"],
			project: ["*.ts"],
		},
		docs: {
			entry: ["src/content.config.ts", "astro.config.ts"],
			project: ["src/**/*.ts", "*.ts"],
		},
		"packages/*": {
			entry: ["src/index.ts", "vite.config.ts", "vitest.config.ts", "eslint.config.ts"],
			project: ["src/**/*.{ts,tsx}", "*.ts"],
		},
	},
	ignoreDependencies: [
		// commitlint "extends" uses string shorthand
		"@theholocron/commitlint-config",
		"@theholocron",
		// passed as --config arg to lint-staged binary in .husky/pre-commit
		"@theholocron/lint-staged-config",
		// loaded at runtime by the holocron plugin system — not a static import
		"@theholocron/holocron-plugin-github",
		// skills referenced as strings in holocron.config.ts
		"@theholocron/skills",
		// binary tools — invoked via CLI or hooks, not module imports
		"sort-package-json",
		"turbo",
	],
	ignoreExportsUsedInFile: true,
};

export default config;
