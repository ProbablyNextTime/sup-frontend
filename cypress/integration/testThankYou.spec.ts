describe("Welcome to youre new app", () => {
  beforeEach(() => {
    cy.server()
    cy.visit("/thank-you")
  })

  it("sample test", () => {
    cy.dataCy("thank-you-return").click()
    cy.url().should("include", "/dashboard")
  })
})

export {}
