import { defineConfig } from "@theholocron/cli";
import { node } from "@theholocron/holocron-config";

const { repo, workflows, providers } = node();
export default defineConfig({
	description: "A modern React component library template for monorepos with pre-configured tools, best practices, and CI/CD setup for rapid project development.",
	homepage: "https://docs.theholocron.dev/monorepo-react-template/",
	repo: {
		name: "theholocron/monorepo-react-template",
		teams: [{ slug: "gatekeepers", permission: "maintain" }],
		topics: ["monorepo","pnpm","react","template","typescript","vite"],
		...repo,
		protection: "balanced",
		properties: { ...repo.properties, runtime_environment: "browser", uses_external_packages: false },
	},
	workflows,
	providers,
	agent: "claude",
	skills: ["git-safety","pr-workflow","commit-standards","security-review"],
});
