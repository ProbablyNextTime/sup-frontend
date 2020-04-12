import { UserFactory } from "../fixtures/fixtureFactory/UserFactory"
import { IUser } from "model/user"

/* eslint-disable @typescript-eslint/no-unused-expressions */
const testEmail: string = Cypress.env("testEmail")
const testPassword: string = Cypress.env("testPassword")
const UFactory: UserFactory = new UserFactory()
const okLogInResponse = UFactory.generateLogInResponse()
const unAuthUserResponse: IUser = UFactory.generateEntry()

describe("Test Sign In", () => {
  beforeEach(() => {
    cy.server()
    cy.route("POST", `**/api/auth/refresh`, {}).as("refreshToken")
    cy.visit("/")
  })

  it("should redirect to dashboard and set authTokens UI", () => {
    cy.dataCy("email-input").type(testEmail)
    cy.route("POST", `**/api/auth/login`, okLogInResponse).as("loginSuccess")
    cy.dataCy("password-input").type(testPassword)
    cy.dataCy("login-button")
      .click()
      .should(() => {
        expect(localStorage.getItem("auth-tokens-development")).to.exist.eq(
          JSON.stringify({ accessToken: okLogInResponse.access_token, refreshToken: okLogInResponse.refresh_token })
        )
      })
    cy.wait("@loginSuccess")
    cy.url().should("include", "/dashboard")
  })

  it("should not log in users with invalid email/password", () => {
    cy.route({
      method: "POST",
      url: `**/api/auth/login`,
      response: unAuthUserResponse,
      status: 401,
    }).as("loginUnauthorized")
    cy.dataCy("email-input").type(testEmail)
    cy.dataCy("password-input").type(testPassword)
    cy.dataCy("login-button")
      .click()
      .should(() => {
        expect(localStorage.getItem("auth-tokens-development")).to.not.exist
      })
    cy.wait("@loginUnauthorized")
    cy.url().should("eq", Cypress.config().baseUrl)
  })

  it("Test wrong inputs warnings", () => {
    cy.dataCy("email-input").type("invalid-email")
    cy.dataCy("password-input").type("1")
    cy.dataCy("login-button").click()
    cy.dataCy("password-input").should("contain", "Password should contain at least 5 characters")
    cy.dataCy("email-input").should("contain", "Invalid email")
  })

  it("Inputs required", () => {
    cy.dataCy("login-button").click()
    cy.dataCy("email-input").should("contain", "Required")
    cy.dataCy("password-input").should("contain", "Required")
  })
})
