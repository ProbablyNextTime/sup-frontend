import { transportation_provider } from "./transportation_provider"

export interface IBoardNotice {
  additionalInfo: string
  departureDate: string
  arrivalDate: string
  cargo: object
  deliveryPlace: string
  departurePoint: string
  depositValueInUsd: number
  destinationPoint: string
  id: string
  paymentStatus: string
  pickupPlace: string
  pricePerValueInUsd: number
  status: string
  title: string
  transferNumber: string
  isPremium: boolean
  transportationProvider: transportation_provider
  transportationTags: Array<object>
}

export type MainNoticeInfo = Pick<
IBoardNotice,
| "departureDate"
| "arrivalDate"
| "pickupPlace"
| "isPremium"
| "transferNumber"
| "departurePoint"
| "destinationPoint"
| "deliveryPlace"
>

export type AdditionalNoticeInfo = Pick<IBoardNotice, "transportationProvider" | "transportationTags">
