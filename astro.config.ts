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

// @astrojs/react/server.js cannot be resolved by Rolldown during SSR bundling;
// marking @astrojs/react as external lets Node resolve it at runtime instead.
export default {
	...config,
	vite: {
		...config.vite,
		ssr: {
			external: ["@astrojs/react"],
		},
	},
};
