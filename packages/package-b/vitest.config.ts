import { coverage, storybook } from "@theholocron/vitest-config";
import { defineConfig } from "vitest/config";

export default defineConfig(async () => ({
	test: {
		coverage: {
			...coverage,
			exclude: [...coverage.exclude, "**/*.css"],
		},
		projects: [await storybook(".storybook", { setupFiles: ["./vitest.setup.ts"] })],
	},
}));
