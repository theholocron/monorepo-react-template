import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// App build for the demo harness (app/main.tsx + index.html).
// Used by `pnpm preview` for Lighthouse. The library build lives in vite.config.ts.
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist-app",
	},
});
