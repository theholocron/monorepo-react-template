import { defineConfig } from "@theholocron/cli";
import { monorepo, react } from "@theholocron/holocron-config";

const { repo, workflows, providers, org, domain } = monorepo(react());
export default defineConfig({
	description:
		"A modern React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/monorepo-react-template/",
	org,
	domain,
	repo: {
		name: "theholocron/monorepo-react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo", "pnpm", "react", "template", "typescript", "vite"],
		...repo,
		requiredChecks: [
			...(repo.requiredChecks ?? []),
			"Test / Run Storybook interaction tests",
			"Test / Test Interactions and Accessibility",
			"Test / Test User Flow (1)",
			"Test / Test User Flow (2)",
			"Test / Test Visual and Composition (PACKAGE_B)",
			"audit / Audit the bundle size",
			"audit / Audit the performance",
			"codecov/patch/package-b",
		],
		properties: {
			...repo.properties,
			uses_external_packages: false,
		},
	},
	workflows: [
		...workflows,
		{
			name: "test",
			with: {
				"run-chromatic": {
					projects: [{ tokenName: "PACKAGE_B", workingDir: "packages/package-b" }],
				},
			},
		},
		{ name: "release", with: { "run-build": true } },
		"sync",
		{
			name: "deploy",
			with: {
				docs: true,
				storybook: [{ name: "package-b", path: "packages/package-b" }],
			},
		},
	],
	providers,
	docs: { build: "workflow", https: true },
	agent: "claude",
	skills: ["git-safety", "pr-workflow", "commit-standards", "security-review"],
});
