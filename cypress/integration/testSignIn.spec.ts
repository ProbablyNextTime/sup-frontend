import * as data from "../fixtures/loginFormData.json"

describe("Test Sign In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it.only("Test success redirect", () => {
    // cy.server({
    //   method: 'POST',
    //   delay: 1000,
    //   status: 200,
    //   response: {}
    // });
    //
    // cy.route('/auth/login', { accessToken: "f", refreshToken: "b", user: data.userObj} )

    cy.dataCy("email-input").type(data.email)
    cy.dataCy("password-input").type(data.password)
    cy.dataCy("login-button").click()
    cy.url().should("include", "/dashboard")
  })

  it("Test wrong inputs warnings", () => {
    cy.dataCy("email-input").type(data.incorrectEmail)
    cy.dataCy("password-input").type(data.toShortPassword)
    cy.dataCy("login-button").click()
    cy.dataCy("password-input").should("contain", "Password should contain at least 6 characters")
    cy.dataCy("email-input").should("contain", "Invalid email")
  })

  it("Inputs required", () => {
    cy.dataCy("login-button").click()
    cy.dataCy("email-input").should("contain", "Required")
    cy.dataCy("password-input").should("contain", "Required")
  })
})
