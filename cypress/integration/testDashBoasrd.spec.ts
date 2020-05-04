import { NoticeFactory, IGetNoticesResponse } from "../fixtures/fixtureFactory/NoticeFactory"
const NFactory: NoticeFactory = new NoticeFactory()
const getNoticesResponse: IGetNoticesResponse = NFactory.generateGetNoticesResponse()

describe("test dashboard", () => {
  beforeEach(() => {
    cy.server()
    cy.route("GET", `**/api/notices`, getNoticesResponse).as("getNotices")
    cy.route("GET", `**/api/transportation_offer`)
    cy.visit("/dashboard")
  })

  it.skip("test infinity scroll", () => {
    cy.wait("@getNotices")
    let numberOfChildren = 10

    for (let i = 0; i < 5; i++) {
      cy.dataCy("notices")
        .children()
        .then((children) => {
          cy.wrap(children).its("length").should("eq", numberOfChildren)
        })
      cy.dataCy("notices")
        .scrollTo("bottom", { duration: 2000 })
        .wait("@getNotices")
        .then(() => (numberOfChildren += 10))
    }

    it.only("test search", () => {
      cy.wait("@getNotices")

      cy.dataCy("searchField").type("alg")
    })
  })
})
