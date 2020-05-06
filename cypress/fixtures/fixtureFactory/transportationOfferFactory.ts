import faker from "faker/locale/en_US"
import { FixtureFactory } from "./FixtureFactory"
import transportationOffer, { PaymentStatus, TransportationOfferStatus } from "../../../src/model/transportationOffer"
import { ITransportationProvider } from "../../../src/model/transportationProvider"

export class TransportationOfferFactory extends FixtureFactory {
  public generateEntry({
    id,
    createdAt,
    status,
    title,
    paymentStatus,
    depositValueInUsd,
    pricePerUnitInUsd,
    additionalInfo,
    departureDate,
    arrivalDate,
    cargo,
    deliveryPlace,
    departurePoint,
    destinationPoint,
    pickupPlace,
    pricePerValueInUsd,
    transferNumber,
    isPremium,
    transportationProvider,
    transportationTags,
  }: Partial<transportationOffer> = {}): transportationOffer {
    return {
      additionalInfo: additionalInfo || faker.random.word(),
      departureDate: departureDate || faker.random.word(),
      arrivalDate: arrivalDate || faker.random.word(),
      cargo: cargo || { id: "ExtId" },
      deliveryPlace: deliveryPlace || "default",
      departurePoint: departurePoint || faker.random.word(),
      depositValueInUsd: depositValueInUsd || faker.random.number(100),
      destinationPoint: destinationPoint || faker.random.word(),
      id: destinationPoint || faker.random.word(),
      paymentStatus: paymentStatus || PaymentStatus.not_paid,
      pickupPlace: pickupPlace || faker.random.word(),
      pricePerValueInUsd: pricePerValueInUsd || faker.random.number(100),
      createdAt: createdAt || faker.random.word(),
      pricePerUnitInUsd: pricePerUnitInUsd || faker.random.number(100),
      status: status || TransportationOfferStatus.opened,
      title: title || faker.random.word(),
      transferNumber: transferNumber || faker.random.word(),
      isPremium: isPremium || faker.random.boolean(),
      transportationProvider:
        transportationProvider ||
        ({
          reviewsReceived: [],
          additional_details: ["asdasdasdas", "sdasdasdasdasd", "sdadasdasdasdasd"],
          id: "null",
          name: "name",
        } as ITransportationProvider),
      transportationTags: transportationTags || [],
    }
  }

  public generateEntries(quantity: number): transportationOffer[] {
    return [...Array(quantity)].map(this.generateEntry)
  }

  public generateGetNoticesResponse(): transportationOffer[] {
    return this.generateEntries(10)
  }
}
