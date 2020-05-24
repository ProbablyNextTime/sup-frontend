/* eslint-disable no-undef */

Cypress.Commands.add("dataCy", (element) => {
  return cy.get(`[data-cy=${element}]`)
})

Cypress.Commands.add("login", (transportationOffers) => {
  // mock refresh token response
  cy.route("POST", `**/api/auth/refresh`, {}).as("postRefreshToken")
  // Get list of transportationOffers
  cy.route({
    method: "GET",
    url: `**/api/transportation_offer?query=&*`,
    response: transportationOffers,
  }).as("getOffers")
  cy.visit("/", {
    onBeforeLoad() {
      /**
       * before the page finishes loading
       * set the user object in local storage
       */
      localStorage.setItem("auth-tokens-development", JSON.stringify({ accessToken: "test", refreshToken: "test" }))
    },
  })
  //wait for offers to be loaded
  cy.wait("@getOffers")
  // should redirect to dashboard
  cy.url().should("include", "/dashboard")
})
