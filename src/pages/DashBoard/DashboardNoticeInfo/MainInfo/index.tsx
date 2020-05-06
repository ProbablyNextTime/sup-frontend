import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import { DashboardContext } from "service/context/dashboardContext"

const premiumFont = { color: "#fed133" }

const MainInfo = () => {
  const dashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography variant={"subtitle1"}>TRANSFER NUMBER</Typography>
        <Box className={classes.transferNumber}>
          {dashboardContext.transportationOffer.isPremium && (
            <Star className={classes.premiumStar} fontSize={"small"} />
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
          <Typography variant={"subtitle1"}>PICK UP</Typography>
          <Typography className={classes.contentText}>{dashboardContext.transportationOffer.departurePoint}</Typography>
          <Typography variant={"subtitle1"}>AT</Typography>
          <Typography className={classes.placeText}>{dashboardContext.transportationOffer.pickupPlace}</Typography>
          <Typography className={classes.date}>{dashboardContext.transportationOffer.departureDate}</Typography>
        </Box>
        <Box className={classes.deliveryInfo}>
          <Typography variant={"subtitle1"}>FINAL DELIVERY</Typography>
          <Typography className={classes.contentText}>
            {dashboardContext.transportationOffer.destinationPoint}
          </Typography>
          <Typography variant={"subtitle1"}>AT</Typography>
          <Typography className={classes.placeText}>{dashboardContext.transportationOffer.deliveryPlace}</Typography>
          <Typography className={classes.date}>{dashboardContext.transportationOffer.arrivalDate}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainInfo
