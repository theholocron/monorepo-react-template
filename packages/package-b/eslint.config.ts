import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import { cypress } from "@theholocron/eslint-config/cypress";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...reactApp(),
	...cypress(),
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
			},
		},
		settings: {
			react: { version: "19" },
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			"n/no-missing-import": "off",
		},
	},
	{
		files: [".storybook/**"],
		rules: {
			// storybook/no-uninstalled-addons resolves package.json from process.cwd()
			// (the workspace root), not from this package directory. Point it at the
			// correct package.json so it finds the Storybook devDependencies here.
			"storybook/no-uninstalled-addons": ["error", { packageJsonLocation: "./packages/package-b/package.json" }],
		},
	},
	{ ignores: ["dist/**", "coverage/**"] },
];

export default config;
