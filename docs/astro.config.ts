import starlight from "@astrojs/starlight";
import { docsTheme } from "@theholocron/docs-theme";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://theholocron.github.io",
	base: "/monorepo-template",
	integrations: [
		starlight({
			title: "Monorepo Template",
			plugins: [docsTheme()],
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/theholocron/monorepo-template",
				},
			],
			sidebar: [{ label: "Overview", slug: "" }],
		}),
	],
});
