import * as React from "react"
import ITransportationOffer from "model/transportationOffer"
import { useAPICallback } from "hooks/useApiCallback"
import { getTransportationOffer } from "service/api/transportationOffer"
import PaymentForm from "../PaymentForm"
import { Grid, Typography } from "@material-ui/core"
import useStyles from "./styles"
import { DashboardContext, IDashboardContext } from "service/dashboardContext/dashboardContext"

interface ICheckoutBoxProps {
  transportationOfferId: ExtId
}

const CheckoutBox = ({ transportationOfferId }: ICheckoutBoxProps) => {
  const dashboardContext: IDashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm container>
        <Typography gutterBottom variant="subtitle1">
          Order Summary
          {/* TODO: SHOPPING CART ICON HERE */}
        </Typography>

        <PaymentForm />
      </Grid>
    </div>
  )
}

export default CheckoutBox
