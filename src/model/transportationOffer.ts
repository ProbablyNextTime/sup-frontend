import { ITransportationProvider } from "./transportationProvider"
import { ITransportationOfferTag } from "./transportationOfferTag"
import { ICargo } from "./cargo"

export enum TransportationOfferStatus {
  opened = "opened",
  completed = "completed",
  canceled = "canceled",
}

export enum PaymentStatus {
  not_paid = "not_paid",
  paid = "paid",
  payment_failed = "payment_failed",
  refunded = "refunded",
}

export default interface ITransportationOffer {
  /* Transportation Providers can publish transportation offers which can be acquired by users.
   */
  id: ExtId
  createdAt: string
  status: TransportationOfferStatus
  title: string
  paymentStatus: PaymentStatus
  depositValueInUsd: number
  pricePerUnitInUsd: number
  additionalInfo: string
  departureDate: string
  arrivalDate: string
  cargo: ICargo
  deliveryPlace: string
  departurePoint: string
  destinationPoint: string
  pickupPlace: string
  pricePerValueInUsd: number
  transferNumber: string
  isPremium: boolean
  transportationProvider: ITransportationProvider
  transportationTags: ITransportationOfferTag[]
}

export type NewTransportationOffer = Pick<
  ITransportationOffer,
  "transportationProvider" | "title" | "depositValueInUsd"
>
