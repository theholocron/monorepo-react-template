import { createRequire } from "node:module";

import starlight from "@astrojs/starlight";
import { defineConfig } from "@theholocron/astro-config";
import { docsTheme } from "@theholocron/docs-theme";

// rolldown@1.2.x cannot resolve @astrojs/react sub-path exports from
// virtual:astro:renderers. Aliasing to absolute paths lets rolldown find them
// via filesystem resolution while keeping them bundled for SSR prerendering.
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

const base = config.vite as {
	resolve?: { alias?: Record<string, string> };
	optimizeDeps?: { include?: string[] };
};

export default {
	...config,
	vite: {
		...config.vite,
		// Force React to be bundled (CJS→ESM) in the SSR/module-runner path so
		// Vite 8's module runner doesn't hit "module is not defined" when
		// evaluating React's CJS entry during Astro's dev-mode server rendering.
		ssr: {
			noExternal: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
		},
		optimizeDeps: {
			...base.optimizeDeps,
			include: [
				...(base.optimizeDeps?.include ?? []),
				"react",
				"react-dom",
				"react/jsx-runtime",
				"react/jsx-dev-runtime",
			],
		},
		resolve: {
			...base.resolve,
			alias: {
				...(base.resolve?.alias ?? {}),
				"@astrojs/react/client.js": astroReactClient,
				"@astrojs/react/server.js": astroReactServer,
			},
		},
	},
};
