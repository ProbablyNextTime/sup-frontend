describe("Thank ypu screen test", () => {
  beforeEach(() => {
    cy.server()

    cy.login([])
  })

  it("test return to the dashboard", () => {
    cy.visit("/thank-you")
    cy.dataCy("thank-you-return").click()
    cy.url().should("include", "/dashboard")
  })
})

export {}
