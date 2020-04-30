import * as React from "react"
import Box from "@material-ui/core/Box"
import { IBoardNotice } from "../../../../model/notice"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import { ShoppingCart } from "@material-ui/icons"
import PaymentForm from "../../../Payment/PaymentForm"

interface IDashBoardProps {
  notice: IBoardNotice
}

function makePoint(point: string): string {
  if (point === undefined) return ""
  return point.slice(2)
}

const OrderSummary = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.headerBlock}>
        <Typography className={classes.topHeader} component={"h3"}>
          Order Summary
        </Typography>
        <ShoppingCart className={classes.cartIcon} font-size={"small"} />
      </Box>
      <Typography className={classes.destinationInfo}>
        {`Destination:  ${makePoint(props.notice.departurePoint)} — ${makePoint(props.notice.destinationPoint)}`}
      </Typography>
      <Box className={classes.placeSummaryInfo}>
        <Typography className={classes.contentHeader}>PICKUP:</Typography>
        <Typography className={classes.contentSubHeader}>
          Where: <span className={classes.highlightedContent}>{props.notice.pickupPlace}</span>
        </Typography>
        <Typography className={classes.contentSubHeader}>
          When: <span className={classes.highlightedContent}>{props.notice.departureDate}</span>
        </Typography>
      </Box>
      <Box className={classes.placeSummaryInfo}>
        <Typography className={classes.contentHeader}>FINAL DELIVERY:</Typography>
        <Typography className={classes.contentSubHeader}>
          Where: <span className={classes.highlightedContent}>{props.notice.deliveryPlace}</span>
        </Typography>
        <Typography className={classes.contentSubHeader}>
          When: <span className={classes.highlightedContent}>{props.notice.arrivalDate}</span>
        </Typography>
      </Box>
      <PaymentForm />
    </Box>
  )
}

export default OrderSummary
