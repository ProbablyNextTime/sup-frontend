import * as React from "react"
import ButtonWithLoading from "pages/common/button"
import { useAPICallback } from "hooks/useApiCallback"
import useStyles from "./styles"
import StripeIcon from "pages/common/stripeIcon"
import { useHistory } from "react-router"
import { Formik, Form, Field } from "formik"
import { isPositiveInteger } from "utils/formatField"
import { TextField } from "formik-material-ui"
import ITransportationOffer from "model/transportationOffer"
import { updateTransportationOfferDepositValue } from "service/api/transportationOffer"
import snakeCaseKeys from "snakecase-keys"
import { DashboardContext, IDashboardContext } from "service/context/dashboardContext"
import { useStripe } from "@stripe/react-stripe-js"
import { initiateTransportationOfferCheckout } from "service/billing"

interface SubmitButtonProps {
  isLoading: boolean
}

interface IPaymentFormValues {
  orderedUnits: number
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const dashboardContext: IDashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()
  if (dashboardContext.transportationOffer.depositValueInUsd > 0) {
    return (
      <React.Fragment>
        <div className={classes.stripeBadgeContainer}>
          <ButtonWithLoading
            data-cy={"payment-submit"}
            type="submit"
            isLoading={isLoading}
            className={classes.payButton}
          >
            Proceed
          </ButtonWithLoading>
          <StripeIcon width={109} height={30} />
        </div>
      </React.Fragment>
    )
  } else {
    return (
      <ButtonWithLoading data-cy={"submit"} type="submit" isLoading={isLoading} className={classes.payButton}>
        Proceed
      </ButtonWithLoading>
    )
  }
}

const PaymentForm = () => {
  const dashboardContext: IDashboardContext = React.useContext(DashboardContext)
  const history = useHistory()
  const stripe = useStripe()

  /* Stripe utilites.
   * Can't utilize the usePayment hook here since we have to initiate the checkout session only after the user's clicked Proceed(we don't know how much to bill otherwise)
   */
  const initiatePayment = useAPICallback(async () => {
    const id: ExtId = dashboardContext.transportationOffer.id
    if (!dashboardContext.transportationOffer.id) throw new Error("Missing transportation offer ID")

    const res = await initiateTransportationOfferCheckout(id)
    const sessionId = res.session_id

    stripe &&
      sessionId &&
      (await stripe.redirectToCheckout({
        sessionId,
      }))
  }, [dashboardContext.transportationOffer, stripe])

  const submitAndMoveToPayment = useAPICallback(
    /* Checkout the customer with Stripe if the offer has a positive depositValue.
     *
     * Redirect to the thank-you screen otherwise
     */
    async (values: any, actions: any) => {
      if (dashboardContext.transportationOffer.depositValueInUsd > 0) {
        await initiatePayment()
      } else {
        history.push("/thank-you")
      }
    },
    [history, dashboardContext.transportationOffer, initiatePayment]
  )

  const handleSubmit = useAPICallback(
    /* Update the deposit value before charging the customer.
     *
     * Afterwards process the payment with Stripe
     */
    async (values: IPaymentFormValues, actions: any) => {
      const newDepositValueInUsd: Pick<ITransportationOffer, "depositValueInUsd"> = snakeCaseKeys({
        depositValueInUsd: values.orderedUnits * dashboardContext.transportationOffer.pricePerUnitInUsd,
      })

      const updatedOffer: ITransportationOffer = await updateTransportationOfferDepositValue(
        dashboardContext.transportationOffer.id,
        newDepositValueInUsd
      )

      dashboardContext.handleSettingOffer({ transportationOffer: updatedOffer })

      await submitAndMoveToPayment(values, actions)
    },
    [submitAndMoveToPayment, dashboardContext.handleSettingOffer]
  )

  return (
    <Formik
      initialValues={{ depositValueInUsd: dashboardContext.transportationOffer.depositValueInUsd }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name="orderedUnits"
            placeholder="0"
            label="KG"
            data-cy={"orderedUnits-input"}
            type="number"
            min={"1"}
            max={"1000"}
            onKeyDown={(e: KeyboardEvent) => isPositiveInteger(e)}
            component={TextField}
          />
          <SubmitButton isLoading={isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

export default PaymentForm
