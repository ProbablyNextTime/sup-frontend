import { apiClient } from "@jetkit/react"

export interface IInitiateCheckoutResponse {
  session_id: string
}

export const initiateTransportationOfferCheckout = async (offerId: ExtId): Promise<IInitiateCheckoutResponse> =>
  (await apiClient.post(`/billing/checkout/transportation_offer/${offerId}`)).data
