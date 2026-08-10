import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["@theholocron/vitest-config/setup/jest-dom"],
		coverage: {
			enabled: true,
			provider: "v8",
			reporter: ["lcov", "text"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: ["**/*.{test,spec}.*", "src/index.ts", "**/node_modules/**", "**/dist/**"],
			thresholds: { lines: 80, branches: 80, functions: 80, statements: 80 },
		},
	},
});
