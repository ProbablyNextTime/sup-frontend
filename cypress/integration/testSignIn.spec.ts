import { UserFactory } from "../fixtures/fixtureFactory/UserFactory"
import { IUser } from "model/user"
import ITransportationOffer from "../../src/model/transportationOffer"
import { TransportationOfferFactory } from "../fixtures/fixtureFactory/transportationOfferFactory"

/* eslint-disable @typescript-eslint/no-unused-expressions */
const testEmail: string = Cypress.env("testEmail")
const testPassword: string = Cypress.env("testPassword")
const UFactory: UserFactory = new UserFactory()
const okLogInResponse = UFactory.generateLogInResponse()
const unAuthUserResponse: IUser = UFactory.generateEntry()
const transportationOfferFactory: TransportationOfferFactory = new TransportationOfferFactory()
const transportationOffers: ITransportationOffer[] = transportationOfferFactory.generateGetNoticesResponse()

describe("Test Sign In", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("/")
  })

  it("shouldn't give access to dashboard to unauthorized users", () => {
    cy.visit("/dashboard")
    cy.url().should("include", "/login")
  })

  it("should redirect already logged in users to dashboard from LogIn screen", () => {
    cy.login([])
    cy.visit("/")
    cy.url().should("include", "/dashboard")
  })

  it("should redirect to dashboard and set authTokens UI", () => {
    cy.route({
      method: "GET",
      url: `**/api/transportation_offer?query=&*`,
      response: transportationOffers,
    }).as("getOffers")
    cy.route({
      method: "GET",
      url: `**/api/transportation_tag**`,
      response: {},
    }).as("getTags")
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
    cy.dataCy("failed-auth").should("contain", "Invalid email or password")
    cy.url().should("eq", Cypress.config().baseUrl + "login")
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
