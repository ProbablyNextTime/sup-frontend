import ITransportationOffer from "model/transportation_offer"
import camelCaseKeys from "camelcase-keys"
import { apiClient } from "@jetkit/react"

export const getTransportationOffer = async (transportation_offer_id: ExtId): Promise<ITransportationOffer> =>
  (camelCaseKeys(
    (await apiClient.get(`/transportation_offer/${transportation_offer_id}`)).data
  ) as unknown) as ITransportationOffer
