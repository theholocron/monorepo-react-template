import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

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

// rolldown@1.2.x cannot resolve @astrojs/react sub-path exports
// (server.js, client.js) from virtual:astro:renderers. Aliasing to the
// concrete dist paths lets rolldown find the files via filesystem resolution
// while keeping them bundled (required for SSR prerendering).
const viteResolve = (config.vite as { resolve?: { alias?: Record<string, string> } })?.resolve;
export default {
	...config,
	vite: {
		...config.vite,
		resolve: {
			...viteResolve,
			alias: {
				...(viteResolve?.alias ?? {}),
				"@astrojs/react/client.js": "@astrojs/react/dist/client.js",
				"@astrojs/react/server.js": "@astrojs/react/dist/server.js",
			},
		},
	},
};
