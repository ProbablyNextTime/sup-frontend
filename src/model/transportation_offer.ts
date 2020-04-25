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
  transportationProvider: string
  paymentStatus: PaymentStatus
  depositValueInUsd: number
}

export type NewTransportationOffer = Pick<
ITransportationOffer,
"transportationProvider" | "title" | "depositValueInUsd"
>
