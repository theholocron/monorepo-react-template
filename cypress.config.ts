import { defineConfig } from "cypress";

/*
 * @see https://docs.cypress.io/app/references/configuration
 */
export default defineConfig({
	e2e: {
		baseUrl: "http://localhost:5173/",
		specPattern: "packages/**/src/**/*.{cy.js,cy.ts}",
		supportFile: false,
		retries: 2,
	},
	projectId: "1ppgq5",
});
