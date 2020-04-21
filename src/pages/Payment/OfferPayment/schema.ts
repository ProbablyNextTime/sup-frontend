import * as Yup from "yup"
import { NewTransportationOffer } from "model/transportation_offer"

Yup.setLocale({
  mixed: {
    required: "This field is required",
  },
  number: {
    positive: "This field must be a positive number",
    integer: "This field must be an integer",
  },
})

export const validationSchema = Yup.object().shape<NewTransportationOffer>({
  transportationProvider: Yup.string().required(),
  title: Yup.string().required(),
  depositValueInUsd: Yup.number().required().integer(),
})

export const emptyVacancy: Record<keyof NewTransportationOffer, string> = {
  transportationProvider: "",
  title: "",
  depositValueInUsd: "",
}
