import * as React from "react"
import TransportationOffer from "model/transportation_offer"
import ButtonWithLoading from "pages/common/button"
import { useAPICallback } from "hooks/useApiCallback"
import useStyles from "./style"
import StripeIcon from "pages/common/stripeIcon"
import { useHistory } from "react-router"
import { usePayment, BillType } from "pages/Payment"
import { Formik, Form, Field } from "formik"
import { InputAdornment } from "@material-ui/core"
import { isNegativeNumber } from "utils/formatField"
import { TextField } from "formik-material-ui"
import ITransportationOffer from "model/transportation_offer"
import { getTransportationOffer } from "service/api/transportationOffer"

interface SubmitButtonProps {
  transportationOffer: TransportationOffer
  isLoading: boolean
}

function SubmitButton({ transportationOffer, isLoading }: SubmitButtonProps) {
  const classes = useStyles()
  if (transportationOffer.depositValueInUsd > 0) {
    return (
      <React.Fragment>
        <div className={classes.stripeBadgeContainer}>
          <ButtonWithLoading
            data-cy={"payment-submit"}
            type="submit"
            isLoading={isLoading}
            className={classes.payButton}
          >
            Submit and Pay
          </ButtonWithLoading>
          <StripeIcon width={109} height={30} />
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <ButtonWithLoading data-cy={"submit"} type="submit" isLoading={isLoading} className={classes.payButton}>
        Submit
      </ButtonWithLoading>
    )
  }
}

interface IOfferPaymentProps {
  transportation_offer_id: string
}

interface IOfferPaymentValues {
  [key: string]: string
}

const OfferPayment = ({ transportation_offer_id }: IOfferPaymentProps) => {
  const history = useHistory()
  const handlePay = usePayment(BillType.transportation_offer, transportation_offer_id)

  const [transportationOffer, setTransportationOffer] = React.useState<ITransportationOffer>()

  const loadTransportationOffer = useAPICallback(
    async (id: ExtId) => setTransportationOffer(await getTransportationOffer(id)),
    [setTransportationOffer]
  )

  React.useEffect(() => {
    loadTransportationOffer(transportation_offer_id)
  }, [loadTransportationOffer, transportation_offer_id])

  /* Checkout the customer with Stripe if the offer has a positive depositValue.
   *
   * Redirect to the thank-you right away otherwise
   */

  const submitAndMoveToPayment = React.useCallback(
    async (values: any, actions: any) => {
      // TODO: Possible API calls here
      if (transportationOffer && transportationOffer.depositValueInUsd > 0) {
        handlePay()
      } else {
        history.push("/thank-you")
      }
    },
    [history, transportationOffer, handlePay]
  )

  const handleSubmit = useAPICallback(
    (values: IOfferPaymentValues, actions: any) => {
      // TODO: Update the offer

      submitAndMoveToPayment(values, actions)
    },
    [submitAndMoveToPayment]
  )
  //
  return (
    <Formik
      initialValues={{ depositValueInUsd: transportationOffer ? transportationOffer.depositValueInUsd : 1 }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="depositValueInUsd"
            label="Deposit"
            data-cy={"depositValue-input"}
            type="number"
            onKeyDown={(e: KeyboardEvent) => isNegativeNumber(e)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            component={TextField}
          />
          {transportationOffer && <SubmitButton isLoading={isSubmitting} transportationOffer={transportationOffer} />}
        </Form>
      )}
    </Formik>
  )
}

export default OfferPayment
