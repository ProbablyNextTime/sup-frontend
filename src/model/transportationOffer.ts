import { transportation_provider } from "./transportation_provider"

export type TransportationOfferStatusTypedString = "opened" | "completed" | "canceled"

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
  cargo: object
  deliveryPlace: string
  departurePoint: string
  destinationPoint: string
  pickupPlace: string
  pricePerValueInUsd: number
  transferNumber: string
  isPremium: boolean
  transportationProvider: transportation_provider
  transportationTags: Array<object>
}

export type NewTransportationOffer = Pick<
ITransportationOffer,
"transportationProvider" | "title" | "depositValueInUsd"
>
