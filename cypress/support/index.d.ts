declare namespace Cypress {
  interface Chainable {
    /**
     * Command to select DOM element by data-cy attribute.
     * @example cy.dataCy('submit')
     */
    dataCy(element: string): Chainable<Element>
    /**
     * Command to set JWT token and log in user to the app.
     * @example cy.login()
     */
  }
}
