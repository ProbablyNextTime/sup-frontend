export interface IBoardNotice {
  picUrl: string
  peopleTransfer: boolean
  rating: number
  from: string
  to: string
  desc: string
  vehicleType: string
  noticeProvider: string
  maxAmount: number
  tags: Array<string>
  numberOfReviews: number
  estimatedPrice: number
}
