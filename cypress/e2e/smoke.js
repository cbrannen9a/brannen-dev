describe("app", () => {
  it("works", () => {
    cy.visit("/")
      .findByText(/view all/i)
      .click();
  });
  it("visits projects", () => {
    cy.visit("/")
      .findByText(/view all/i)
      .click();
  });
  it("goes back home", () => {
    cy.visit("/projects")
      .findByText(/back/i)
      .click();
  });

  it("checks for name", () => {
    cy.visit("/").findByText("I'm Chris Brannen");
  });
});
