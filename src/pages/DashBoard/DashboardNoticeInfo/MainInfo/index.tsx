import * as React from "react"
import { Box, IconButton } from "@material-ui/core"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import Map from "@material-ui/icons/Map"
import { DashboardContext } from "service/dashboardContext/dashboardContext"
import { KeyboardArrowLeft } from "@material-ui/icons"
import moment from "moment"

interface mainInfoProps {
  displayMapIcon: boolean
  width: number
  setShowOfferList: React.Dispatch<React.SetStateAction<boolean>>
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>
}

const MainInfo = ({ width, displayMapIcon, setShowMap, setShowOfferList }: mainInfoProps) => {
  const dashboardContext = React.useContext(DashboardContext)

  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        {width < 850 && (
          <IconButton className={classes.backIcon} onClick={() => setShowOfferList(true)}>
            <KeyboardArrowLeft />
          </IconButton>
        )}
        <Box className={classes.mainInfoContainer}>
          <Typography variant={"subtitle1"}>TRANSFER NUMBER</Typography>
          <Box className={classes.transferNumber}>
            {dashboardContext.transportationOffer.isPremium && (
              <Star className={classes.premiumStar} fontSize={"small"} />
            )}
            <Typography
              data-cy={"selectedOfferTransferNumber"}
              className={classes.transferNumberText}
              style={dashboardContext.transportationOffer.isPremium ? { color: "#fed133" } : {}}
            >
              {dashboardContext.transportationOffer.transferNumber}
            </Typography>
          </Box>
        </Box>
        {displayMapIcon && (
          <IconButton classes={{ root: classes.mapIconButton }} onClick={() => setShowMap(true)}>
            <Map />
          </IconButton>
        )}
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.departureInfo}>
          <Typography variant={"subtitle1"}>PICK UP</Typography>
          <Typography className={classes.contentText}>{dashboardContext.transportationOffer.departurePoint}</Typography>
          <Typography variant={"subtitle1"}>AT</Typography>
          <Typography className={classes.placeText}>{dashboardContext.transportationOffer.pickupPlace}</Typography>
          <Typography className={classes.date}>
            {moment(dashboardContext.transportationOffer.departureDate).format("MMMM Do YYYY, h:mm a")}
          </Typography>
        </Box>
        <Box className={classes.deliveryInfo}>
          <Typography variant={"subtitle1"}>FINAL DELIVERY</Typography>
          <Typography className={classes.contentText}>
            {dashboardContext.transportationOffer.destinationPoint}
          </Typography>
          <Typography variant={"subtitle1"}>AT</Typography>
          <Typography className={classes.placeText}>{dashboardContext.transportationOffer.deliveryPlace}</Typography>
          <Typography className={classes.date}>
            {moment(dashboardContext.transportationOffer.arrivalDate).format("MMMM Do YYYY, h:mm a")}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainInfo
