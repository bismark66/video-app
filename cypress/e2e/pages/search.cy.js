/** @format */

describe("Navigation", () => {
  it("should navigate to the Search page", () => {
    // Start from the index page

    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "search" and click it
    cy.get('a[href*="search"]').click();

    // The new url should include "/search"
    cy.url().should("include", "/search");

    cy.contains("No Movie Found");
  });
});
