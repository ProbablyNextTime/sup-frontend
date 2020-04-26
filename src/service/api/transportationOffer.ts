import ITransportationOffer from "model/transportationOffer"
import camelCaseKeys from "camelcase-keys"
import { apiClient } from "@jetkit/react"

export const getTransportationOffer = async (transportationOfferId: ExtId): Promise<ITransportationOffer> =>
  (camelCaseKeys(
    (await apiClient.get(`/transportation_offer/${transportationOfferId}`)).data
  ) as unknown) as ITransportationOffer

export const updateTransportationOfferDepositValue = async (
  transportationOfferId: ExtId,
  depositValueInUsd: Pick<ITransportationOffer, "depositValueInUsd">
): Promise<ITransportationOffer> =>
  camelCaseKeys((await apiClient.patch(`/transportation_offer/${transportationOfferId}`, depositValueInUsd)).data)
