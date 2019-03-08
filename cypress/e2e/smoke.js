describe('app', () => {
    it('works', () => {
        cy.visit('/')
            .getByText(/view all/i)
            .click();
    });
    it('visits projects', () => {
        cy.visit('/')
            .getByText(/view all/i)
            .click();
    });
    it('goes back home', () => {
        cy.visit('/projects')
            .getByText(/back/i)
            .click();
    });

    it('checks for name', () => {
        cy.visit('/').getByText("I'm Chris Brannen");
    });
});
