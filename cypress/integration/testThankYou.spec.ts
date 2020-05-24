describe("Thank ypu screen test", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("/thank-you")
  })

  it("test return to the dashboard", () => {
    cy.dataCy("thank-you-return").click()
    cy.url().should("include", "/dashboard")
  })
})

export {}
