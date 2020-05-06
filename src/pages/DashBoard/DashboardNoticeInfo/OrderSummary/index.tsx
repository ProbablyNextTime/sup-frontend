import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import { ShoppingCart } from "@material-ui/icons"
import PaymentForm from "../../../Payment/PaymentForm"
import { DashboardContext } from "service/context/dashboardContext"


const OrderSummary = () => {
  const dashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.headerBlock}>
        <Typography className={classes.topHeader} component={"h3"}>
          Order Summary
        </Typography>
        <ShoppingCart className={classes.cartIcon} font-size={"small"} />
      </Box>

      <Typography className={classes.destinationInfo} data-cy={"destination"}>
        {`Destination:  ${dashboardContext.transportationOffer.departurePoint} — ${dashboardContext.transportationOffer.destinationPoint}`}
      </Typography>
      <Box className={classes.placeSummaryInfo}>
        <Typography className={classes.contentHeader}>PICKUP:</Typography>
        <Typography className={classes.contentSubHeader}>
          Where: <span className={classes.highlightedContent}>{dashboardContext.transportationOffer.pickupPlace}</span>
        </Typography>
        <Typography className={classes.contentSubHeader}>
          When: <span className={classes.highlightedContent}>{dashboardContext.transportationOffer.departureDate}</span>
        </Typography>
      </Box>
      <Box className={classes.placeSummaryInfo}>
        <Typography className={classes.contentHeader}>FINAL DELIVERY:</Typography>
        <Typography className={classes.contentSubHeader}>
          Where:{" "}
          <span className={classes.highlightedContent}>{dashboardContext.transportationOffer.deliveryPlace}</span>
        </Typography>
        <Typography className={classes.contentSubHeader}>
          When: <span className={classes.highlightedContent}>{dashboardContext.transportationOffer.arrivalDate}</span>
        </Typography>
      </Box>
      <PaymentForm />
    </Box>
  )
}

export default OrderSummary
