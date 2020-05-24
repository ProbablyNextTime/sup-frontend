import { TransportationOfferFactory } from "../fixtures/fixtureFactory/transportationOfferFactory"
import ITransportationOffer from "../../src/model/transportationOffer"
const transportationOfferFactory: TransportationOfferFactory = new TransportationOfferFactory()
const getTransportationNoticesResponse: ITransportationOffer[] = transportationOfferFactory.generateGetNoticesResponse()
const getSearchedOffers: ITransportationOffer[] = transportationOfferFactory.generateEntries(4)

describe("test dashboard", () => {
  beforeEach(() => {
    cy.server()
    cy.login(getTransportationNoticesResponse)
  })

  it("test infinity scroll", () => {
    let numberOfChildren = 10

    for (let i = 0; i < 4; i++) {
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

  it("test search", () => {
    cy.route("GET", `**/api/transportation_offer**`, getSearchedOffers).as("getOffers")
    cy.dataCy("searchField").type("alg")
    cy.wait("@getOffers")
    cy.dataCy("offers")
      .children()
      .then((children) => {
        cy.wrap(children).its("length").should("eq", 4)
      })
  })

  it("test offer selection", () => {
    cy.dataCy("offers")
      .children()
      .then((children) => {
        for (let i = 0; i < getTransportationNoticesResponse.length; i++) {
          cy.wrap(children[i]).click()
          cy.dataCy("selectedOfferTransferNumber").should("contain", getTransportationNoticesResponse[i].transferNumber)
          cy.dataCy("carrierName").should("contain", getTransportationNoticesResponse[i].transportationProvider.name)
          for (const selectedOfferDetail of getTransportationNoticesResponse[i].transportationProvider
            .additional_details)
            cy.dataCy("additionalDetails").should("contain", selectedOfferDetail)
          cy.dataCy("destination").should("contain", getTransportationNoticesResponse[i].destinationPoint)
        }
      })
  })
})
