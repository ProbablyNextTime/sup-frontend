/// <reference types="cypress" />
import * as data from "../fixtures/loginFormData.json"

describe("Test Sign In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/")
  })

  it.only("Test success redirect", () => {
    cy.get("[data-cy-email-input]").type(data.email)
    cy.get("[data-cy-password-input]").type(data.password)
    cy.get("[data-cy-login-button").click()
    cy.location("href").should("eq", "http://localhost:3001/dashboard")
  })
})

export default {}
