import { NoticeFactory, IGetNoticesResponse } from "../fixtures/fixtureFactory/NoticeFactory"
const NFactory: NoticeFactory = new NoticeFactory()
const getNoticesResponse: IGetNoticesResponse = NFactory.generateGetNoticesResponse()

describe("test dashboard", () => {
  beforeEach(() => {
    cy.server()
    cy.route("GET", `**/api/transportation_offer`, getNoticesResponse).as("getOffers")
    cy.visit("/dashboard")
  })

  it.only("test infinity scroll", () => {
    // cy.wait("@getOffers")
    let numberOfChildren = 10

    for (let i = 0; i < 2; i++) {
      cy.dataCy("offers")
        .children()
        .then((children) => {
          cy.wrap(children).its("length").should("eq", numberOfChildren)
        })
      cy.dataCy("offers")
        .scrollTo("bottom", { duration: 2000 })
        .wait("@getOffers")
        .then(() => (numberOfChildren += 10))
    }
  })
})
