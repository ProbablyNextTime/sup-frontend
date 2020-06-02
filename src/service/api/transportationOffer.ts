import ITransportationOffer from "model/transportationOffer"
import camelCaseKeys from "camelcase-keys"
import snakeCaseKeys from "snakecase-keys"
import { apiClient } from "@jetkit/react"
import { ITransportationOfferTag } from "../../model/transportationOfferTag"

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
    (await apiClient.get(`/transportation_offer?query=${query}&page=${page}&page_size=${limit}`)).data
  ) as unknown) as ITransportationOffer[]

export const getTransportationTags = async (): Promise<ITransportationOfferTag[]> =>
  (camelCaseKeys(
    (await apiClient.get("/transportation_tag?page=1&page_size=10")).data
  ) as unknown) as ITransportationOfferTag[]

export const postTransportationOffer = async (values: object): Promise<ITransportationOffer> =>
  (await apiClient.post("/transportation_offer", snakeCaseKeys(values))).data
