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
import { DashboardContext, IDashboardContext } from "service/dashboardContext/dashboardContext"
import { useStripe } from "@stripe/react-stripe-js"
import { initiateTransportationOfferCheckout } from "service/billing"
import { Box, Typography } from "@material-ui/core"
import { Lock } from "@material-ui/icons"
import * as Yup from "yup"

interface SubmitButtonProps {
  isLoading: boolean
}

interface IPaymentFormValues {
  orderedUnits: number
}

function SubmitButton({ isLoading }: SubmitButtonProps) {
  const classes = useStyles()
  return (
    <div className={classes.paymentButtonContainer}>
      <ButtonWithLoading
        className={classes.processButton}
        data-cy={"payment-submit"}
        type="submit"
        isLoading={isLoading}
      >
        <Lock className={classes.processLockIcon} />
        <Typography className={classes.processButtonText} component={"p"}>
          Proceed
        </Typography>
      </ButtonWithLoading>
      <StripeIcon width={100} height={50} />
    </div>
  )
}

const PaymentForm = () => {
  /* Form that allows users to purchase transportation offers.
   *
   * The non-discount price is: orderedUnits * pricePerUnit
   * The deposit value is: price * (100 - voucher discount percent)/100
   */
  const dashboardContext: IDashboardContext = React.useContext(DashboardContext)
  const history = useHistory()
  const stripe = useStripe()
  const classes = useStyles()

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

  const orderedUnitsSchema = Yup.object().shape({
    orderedUnits: Yup.number().min(1, "Please, provide positive value").max(1000, "Out of range").required("Required"),
  })

  return (
    <Formik initialValues={{ orderedUnits: "1" }} onSubmit={handleSubmit} validationSchema={orderedUnitsSchema}>
      {({ isSubmitting, values, setFieldValue }) => (
        <Form className={classes.paymentForm}>
          <Box className={classes.summaryContainer}>
            <Box className={classes.kgInputContainer}>
              <Typography className={classes.inputHeader}>KG: </Typography>
              <Field
                className={classes.inputAmount}
                name="orderedUnits"
                InputProps={{
                  inputProps: { min: 1, max: 100 },
                  className: classes.inputAmount,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    if (parseInt(e.target.value) <= 100 || e.target.value === "")
                      setFieldValue("orderedUnits", e.target.value)
                  },
                }}
                placeholder="0"
                type={"number"}
                data-cy={"orderedUnits-input"}
                onKeyDown={(e: KeyboardEvent) => isPositiveInteger(e)}
                component={TextField}
              />
            </Box>
            <Typography className={classes.summary}>
              Summary:{" "}
              <span style={{ fontWeight: "bold" }}>
                {values.orderedUnits
                  ? `${dashboardContext.transportationOffer.pricePerUnitInUsd * parseInt(values.orderedUnits)}$`
                  : "0$"}
              </span>
            </Typography>
          </Box>
          <Box className={classes.voucherCodeInputContainer}>
            <Typography className={classes.inputHeader}>Voucher Code:</Typography>
            <Field
              name="voucherCode"
              placeholder="0000-0000-0000-0000"
              type="text"
              InputProps={{ className: classes.voucherCodeInput }}
              component={TextField}
            />
          </Box>
          <SubmitButton isLoading={isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

export default PaymentForm
