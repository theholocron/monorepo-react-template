describe("Button", () => {
	it("renders on the page", () => {
		cy.visit("/");
		cy.get("button").should("be.visible");
	});

	it("renders with default primary variant", () => {
		cy.visit("/");
		cy.get("button").should("have.attr", "data-variant", "primary");
	});
});
