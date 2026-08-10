import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { reactApp } from "@theholocron/eslint-config/bundles/react-app";
import type { Linter } from "eslint";

const config: Linter.Config[] = [
	...reactApp(),
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
	{ ignores: ["dist/**", "coverage/**"] },
];

export default config;
