/* eslint-disable no-undef */

Cypress.Commands.add("dataCy", (element) => {
  return cy.get(`[data-cy=${element}]`)
})
