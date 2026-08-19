import { type StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-coverage",
		"@storybook/addon-designs",
		"@storybook/addon-docs",
		"@storybook/addon-links",
		"@storybook/addon-themes",
		"@storybook/addon-vitest",
		"@chromatic-com/storybook",
	],
	docs: {
		defaultName: "Documentation",
	},
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
	viteFinal: (config) => {
		// vite-plugin-dts is only meaningful for the library build; it trips
		// over missing api-extractor.json when Storybook merges vite.config.ts.
		config.plugins = config.plugins?.filter((p) => (p as { name?: string })?.name !== "vite:dts");
		return config;
	},
};

export default config;
