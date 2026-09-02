import { createRequire } from "node:module";

import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

// rolldown@1.2.x cannot resolve @astrojs/react sub-path exports
// (server.js, client.js) from virtual:astro:renderers. Aliasing to absolute
// file paths lets rolldown find them via filesystem resolution while keeping
// them bundled (required for SSR prerendering).
const require = createRequire(import.meta.url);
const astroReactClient = require.resolve("@astrojs/react/client.js");
const astroReactServer = require.resolve("@astrojs/react/server.js");

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

const viteResolve = (config.vite as { resolve?: { alias?: Record<string, string> } })?.resolve;
export default {
	...config,
	vite: {
		...config.vite,
		resolve: {
			...viteResolve,
			alias: {
				...(viteResolve?.alias ?? {}),
				"@astrojs/react/client.js": astroReactClient,
				"@astrojs/react/server.js": astroReactServer,
			},
		},
	},
};
