import { UserFactory } from "../fixtures/fixtureFactory/UserFactory"
import { IUser } from "model/user"

/* eslint-disable @typescript-eslint/no-unused-expressions */
const testEmail: string = Cypress.env("testEmail")
const testPassword: string = Cypress.env("testPassword")
const UFactory: UserFactory = new UserFactory()

describe("Test Sign In", () => {
  it("Test successfull sign up", () => {
    cy.dataCy("signUp-button")
  })
})
