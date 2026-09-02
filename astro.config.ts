import { createRequire } from "node:module";

import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

// Resolve @astrojs/react sub-path exports to actual file paths so rolldown
// can use them as build entries (rolldown@1.2.x cannot resolve bare package
// sub-paths as entry points, only as imports within code).
const require = createRequire(import.meta.url);
const astroReactClient = require.resolve("@astrojs/react/client.js");

const config = defineConfig({
	docs: {
		name: "Monorepo React Template",
		github: "monorepo-react-template",
		sidebar: [{ label: "Overview", slug: "" }],
	},
	starlight,
	docsTheme,
	srcDir: "./docs/src",
	outDir: "./docs/dist",
	publicDir: "./docs/public",
});

export default {
	...config,
	vite: {
		...config.vite,
		resolve: {
			...(config.vite as { resolve?: object })?.resolve,
			alias: {
				...((config.vite as { resolve?: { alias?: object } })?.resolve?.alias ?? {}),
				"@astrojs/react/client.js": astroReactClient,
			},
		},
		build: {
			rolldownOptions: {
				// virtual:astro:renderers imports server.js in the SSR pass;
				// rolldown cannot resolve this sub-path, so keep it external.
				external: ["@astrojs/react/server.js"],
			},
		},
	},
};
