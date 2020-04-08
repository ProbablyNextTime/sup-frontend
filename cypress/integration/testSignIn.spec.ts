/// <reference types="cypress" />
import * as data from "../fixtures/loginFormData.json"

describe("Test Sign In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/")
  })

  it("Test success redirect", () => {
    cy.get("[data-cy-email-input]").type(data.email)
    cy.get("[data-cy-password-input]").type(data.password)
    cy.get("[data-cy-login-button").click()
    cy.location("href").should("eq", "http://localhost:3001/dashboard")
  })

  it("Test wrong inputs warnings", () => {
    cy.get("[data-cy-email-input]").type(data.incorrectEmail)
    cy.get("[data-cy-password-input]").type(data.toShortPassword)
    cy.get("[data-cy-login-button]").click()
    cy.get("[data-cy-password-input]").should("contain", "Password should contain at least 6 characters")
    cy.get("[data-cy-email-input]").should("contain", "Invalid email")
  })

  it("accepts input", () => {
    const input = "Some input"
    cy.get("[data-cy-email-input]").type(input).should("have", input)
    cy.get("[data-cy-password-input]").type(input).should("have", input)
  })

  it("Inputs required", () => {
    cy.get("[data-cy-login-button]").click()
    cy.get("[data-cy-email-input]").should("contain", "Required")
    cy.get("[data-cy-password-input]").should("contain", "Required")
  })
})

export default {}
