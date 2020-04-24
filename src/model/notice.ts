export interface IBoardNotice {
  additionalInfo: string
  departureDate: Date
  arrivalDate: Date
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
  transportationTags: Array<object>
}
