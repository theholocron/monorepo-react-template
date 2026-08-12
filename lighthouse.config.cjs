// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require("@theholocron/lighthouse-config");

const config = defineConfig({
	url: "http://localhost:3000/",
	startServerCommand: "pnpm preview",
});

// `serve` outputs "Accepting connections" — does not match lhci's default
// /(listen|ready)/i pattern. Set a matching pattern and a long enough timeout
// to cover next build (~20s) + npx serve install/start (~10s).
config.ci.collect.startServerReadyPattern = "Accepting";
config.ci.collect.startServerReadyTimeout = 120000;

module.exports = config;
