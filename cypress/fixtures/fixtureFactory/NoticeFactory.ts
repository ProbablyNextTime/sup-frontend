import faker from "faker/locale/en_US"
import { FixtureFactory } from "./FixtureFactory"
import transportationOffer, { PaymentStatus, TransportationOfferStatus } from "../../../src/model/transportationOffer"
import { transportation_provider } from "../../../src/model/transportation_provider"
const vehicleTypes = ["truck", "bus", "train"]

export interface IGetNoticesResponse {
  notices: transportationOffer[]
}

export class NoticeFactory extends FixtureFactory {
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
      // peopleTransfer: peopleTransfer || faker.random.boolean(),
      // rating: rating || faker.random.number(5),
      // from: from || faker.address.city(),
      // to: to || faker.address.city(),
      // vehicleType: vehicleType || vehicleTypes[faker.random.number(2)],
      // noticeProvider: noticeProvider || faker.company.companyName(),
      // maxAmount: maxAmount || faker.random.number(100),
      // tags: tags || [...Array(3)].map((x) => faker.company.catchPhrase()),
      // numberOfReviews: numberOfReviews || faker.random.number(100),
      // estimatedPrice: estimatedPrice || faker.random.number(1000),
      additionalInfo: additionalInfo || faker.random.word(),
      departureDate: departureDate || faker.random.word(),
      arrivalDate: arrivalDate || faker.random.word(),
      cargo: cargo || {},
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
        } as transportation_provider),
      transportationTags: transportationTags || [],
    }
  }

  public generateEntries(quantity: number): transportationOffer[] {
    return [...Array(quantity)].map(this.generateEntry)
  }

  public generateGetNoticesResponse(): IGetNoticesResponse {
    const newNotices = this.generateEntries(10)
    return {
      notices: newNotices,
    }
  }
}
