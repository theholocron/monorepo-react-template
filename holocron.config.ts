import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description:
		"A modern NodeJS template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/monorepo-template/",
	repo: {
		name: "theholocron/monorepo-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "pnpm", "template", "typescript"],
		...repo,
		protection: "balanced",
		properties: {
			...repo.properties,
			runtime_environment: "node",
			open_source: true,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{ name: "release", with: { "run-build": true } },
		{
			name: "deploy-docs",
			with: { name: "monorepo-template" },
			paths: ["docs/**"],
		},
	],
	providers: {
		...providers,
		secrets: "github",
	},
	docs: { build: "workflow", https: true },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
