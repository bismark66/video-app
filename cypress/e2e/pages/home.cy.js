/** @format */

describe("Navigation", () => {
  it("should navigate to the home page", () => {
    // Start from the index page

    cy.visit("http://localhost:3000/");
    cy.contains("Popular");
  });
});

describe("Type into search bar and route to search ", () => {
  it("should visit home", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Popular");
  });

  it("should type into search bar and route to search page with response", () => {
    cy.get("ant-input css-dev-only-do-not-override-1uq9j6g").type(
      "fast and furious"
    );
  });
});
