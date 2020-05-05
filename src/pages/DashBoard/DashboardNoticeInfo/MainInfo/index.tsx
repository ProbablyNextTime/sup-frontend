import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import { DashboardContext } from "../../../../service/context/dashboardContext"

interface IMainInfoProps {}

const premiumFont = { color: "#fed133" }

function makePoint(point: string): string {
  if (point === undefined) return ""
  return point.slice(2)
}

const MainInfo = (props: IMainInfoProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography className={classes.contentHeader}>TRANSFER NUMBER</Typography>
        <Box className={classes.transferNumber}>
          {dashboardContext.transportationOffer.isPremium ? (
            <Star className={classes.premiumStar} fontSize={"small"} />
          ) : (
            <div />
          )}
          <Typography
            data-cy={"selectedOfferTransferNumber"}

            className={classes.transferNumberText}
            style={dashboardContext.transportationOffer.isPremium ? premiumFont : {}}
          >
            {dashboardContext.transportationOffer.transferNumber}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.departureInfo}>
          <Typography className={classes.contentHeader}>PICK UP</Typography>
          <Typography className={classes.contentText}>
            {makePoint(dashboardContext.transportationOffer.departurePoint)}
          </Typography>
          <Typography className={classes.contentHeader}>AT</Typography>
          <Typography className={classes.placeText}>
            {makePoint(dashboardContext.transportationOffer.pickupPlace)}
          </Typography>
          <Typography className={classes.date}>{dashboardContext.transportationOffer.departureDate}</Typography>
        </Box>
        <Box className={classes.deliveryInfo}>
          <Typography className={classes.contentHeader}>FINAL DELIVERY</Typography>
          <Typography className={classes.contentText}>
            {dashboardContext.transportationOffer.destinationPoint}
          </Typography>
          <Typography className={classes.contentHeader}>AT</Typography>
          <Typography className={classes.placeText}>{dashboardContext.transportationOffer.deliveryPlace}</Typography>
          <Typography className={classes.date}>{dashboardContext.transportationOffer.arrivalDate}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainInfo
