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

// virtual:astro:renderers imports @astrojs/react/server.js; rolldown@1.2.x
// cannot resolve this sub-path export during the build pass. Mark it external
// so Node resolves it at runtime instead.
export default {
	...config,
	vite: {
		...config.vite,
		build: {
			rolldownOptions: {
				external: ["@astrojs/react/server.js"],
			},
		},
	},
};
