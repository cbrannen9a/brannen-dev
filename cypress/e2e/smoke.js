describe("app", () => {
  it("works", () => {
    cy.visit("/");
  });
  it("visits posts", () => {
    cy.visit("/")
      .findAllByText(/view all/i)
      .first()
      .should("have.attr", "href", "/posts/")
      .click();
  });
  it("goes back home from projects", () => {
    cy.visit("/projects")
      .findByText(/back/i)
      .click();
  });

  it("checks for name", () => {
    cy.visit("/").findByText("I'm Chris Brannen");
  });
});
