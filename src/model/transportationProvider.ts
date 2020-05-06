import { IReview } from "./IReview"

export interface ITransportationProvider {
  additional_details: string[]
  id: ExtId
  name: string
  reviewsReceived: IReview[]
}
