import { UserFactory } from "../fixtures/fixtureFactory/UserFactory"
import { TransportationOfferFactory } from "../fixtures/fixtureFactory/transportationOfferFactory"
import ITransportationOffer from "../../src/model/transportationOffer"
const transportationOfferFactory: TransportationOfferFactory = new TransportationOfferFactory()
const getTransportationNoticesResponse: ITransportationOffer[] = transportationOfferFactory.generateGetNoticesResponse()

/* eslint-disable @typescript-eslint/no-unused-expressions */
const testEmail: string = Cypress.env("testEmail")
const testPassword: string = Cypress.env("testPassword")
const UFactory: UserFactory = new UserFactory()
const signUpResponse = UFactory.generateSignUpResponse(testEmail, testPassword)
describe("Test Sign Up", () => {
  beforeEach(() => {
    cy.server()
    cy.route("GET", `**/api/transportation_offer?query=&*`, getTransportationNoticesResponse).as("getOffers")
    cy.visit("/")
  })

  it("Test successful sign up", () => {
    cy.route("POST", `**/api/auth/sign-up`, signUpResponse).as("signUpSuccess")
    cy.dataCy("switch-to-signUp").click()
    cy.dataCy("signUp-button").should("exist")
    cy.dataCy("email-signUp-field").type(testEmail)
    cy.dataCy("password-signUp-field").type(testPassword)
    cy.dataCy("confirm-password-signUp-field").type(testPassword)
    cy.dataCy("signUp-button").click()
    cy.wait("@signUpSuccess")
    cy.url().should("include", "/dashboard")
  })

  it("Test failed sign up, user already exists", () => {
    cy.route({
      method: "POST",
      url: `**/api/auth/sign-up`,
      response: {},
      status: 400,
    }).as("signUpFailure")
    cy.dataCy("switch-to-signUp").click()
    cy.dataCy("email-signUp-field").type(testEmail)
    cy.dataCy("password-signUp-field").type(testPassword)
    cy.dataCy("confirm-password-signUp-field").type(testPassword)
    cy.dataCy("signUp-button").click()
    cy.wait("@signUpFailure")
    cy.dataCy("failed-signUp").should("exist")
  })
})
