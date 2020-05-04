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

export const getTransportationOffers = async (
  page: number,
  limit: number,
  query: string
): Promise<ITransportationOffer[]> =>
  (camelCaseKeys(
    (
      await apiClient.get(
        `http://localhost:5000/api/transportation_offer?query=${query}&page=${page}&page_size=${limit}`
      )
    ).data
  ) as unknown) as ITransportationOffer[]
