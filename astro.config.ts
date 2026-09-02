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

// rolldown@1.2.x cannot resolve @astrojs/react sub-path exports (server.js,
// client.js) during the Astro build pass. Mark the entire package external so
// the runtime resolves it instead.
export default {
	...config,
	vite: {
		...config.vite,
		build: {
			rolldownOptions: {
				external: [/^@astrojs\/react/],
			},
		},
	},
};
