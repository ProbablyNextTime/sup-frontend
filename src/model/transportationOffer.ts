import { transportationProvider } from "./transportationProvider"
import { transportationOfferTag } from "./transportationOfferTag"
import { cargo } from "./cargo"

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
  cargo: cargo
  deliveryPlace: string
  departurePoint: string
  destinationPoint: string
  pickupPlace: string
  pricePerValueInUsd: number
  transferNumber: string
  isPremium: boolean
  transportationProvider: transportationProvider
  transportationTags: Array<transportationOfferTag>
}

export type NewTransportationOffer = Pick<
  ITransportationOffer,
  "transportationProvider" | "title" | "depositValueInUsd"
>