import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import ITransportationOffer from "model/transportationOffer"
import Check from "@material-ui/icons/Check"
import { DashboardContext } from "service/dashboardContext/dashboardContext"
import * as classNames from "classnames"
import { ITransportationOfferTag } from "model/transportationOfferTag"
import moment from "moment"

interface IBoardNoticeProps {
  transportationOffer: ITransportationOffer
  isSelectable: boolean
}

const BoardNotice = ({ transportationOffer, isSelectable }: IBoardNoticeProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const peopleTransfer = true
  const isTrusted = true
  const classes = useStyles()

  const handleClick = () => {
    if (isSelectable) dashboardContext.handleSettingOffer({ transportationOffer: transportationOffer })
  }

  return (
    <Card
      elevation={0}
      className={classNames.default(
        classes.boardNoticeWrapper,
        transportationOffer.isPremium && classes.premiumBackground
      )}
      onClick={handleClick}
    >
      <Box className={classes.cardContent}>
        <Box className={classes.route}>
          <Box className={classes.premiumRoute}>
            {transportationOffer.isPremium && <Star className={classes.premiumStar} fontSize={"small"} />}
            <Typography
              className={classes.routeText}
              style={transportationOffer.isPremium ? { color: "#fed133" } : {}}
            >{`${transportationOffer.departurePoint} - ${transportationOffer.destinationPoint}`}</Typography>
          </Box>
          <Typography
            className={classes.reviews}
          >{`${transportationOffer.transportationProvider.reviewsReceived.length} reviews`}</Typography>
        </Box>
        <Box className={classes.transferNumber}>
          <Typography className={classes.transferNumberText}>{transportationOffer.transferNumber}</Typography>
        </Box>
        <Box className={classes.tags}>
          {transportationOffer.transportationTags.map((tag: ITransportationOfferTag) => {
            return <Box className={classes.tag}>{tag.name}</Box>
          })}
        </Box>
      </Box>
      <Box className={classes.contentDivider} />
      <Box className={classes.cardContent}>
        <Box className={classes.placeAndTime}>
          <Box className={classes.pickUpPlace}>
            <Typography className={classes.cardBottomContentHeader}>PICK UP</Typography>
            <Typography
              className={classes.cardBottomContent}
              style={transportationOffer.isPremium ? { color: "#fed133" } : {}}
            >
              {transportationOffer.pickupPlace}
            </Typography>
            <Typography className={classes.cardBottomDate}>
              {moment(transportationOffer.departureDate).format("MMMM Do YYYY, h:mm a")}
            </Typography>
          </Box>
          <Box className={classes.pickUpPlace}>
            <Typography className={classes.cardBottomContentHeader}>FINAL DELIVERY</Typography>
            <Typography
              className={classes.cardBottomContent}
              style={transportationOffer.isPremium ? { color: "#fed133" } : {}}
            >
              {transportationOffer.deliveryPlace}
            </Typography>
            <Typography className={classes.cardBottomDate}>
              {moment(transportationOffer.arrivalDate).format("MMMM Do YYYY, h:mm a")}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.secondaryInfo}>
          <Box className={classes.carrier}>
            <Typography className={classes.cardBottomContentHeader}>CARRIER</Typography>
            <Box className={classes.carrierInfo}>
              <Typography
                className={classes.cardBottomContent}
                style={transportationOffer.isPremium ? { color: "#fed133" } : {}}
              >
                {transportationOffer.transportationProvider.name}
              </Typography>
              {isTrusted && (
                <Check
                  className={classes.isTrusted}
                  style={transportationOffer.isPremium ? { color: "#fed133", borderColor: "#fed133" } : {}}
                />
              )}
            </Box>
          </Box>
          <Box className={classes.cargoInfo}>
            <Typography
              className={classes.isPeopleTransfer}
              style={peopleTransfer ? { color: "#2dd75c" } : { color: "#ff9595" }}
            >
              {peopleTransfer ? "PEOPLE TRANSFER" : "DEAD WEIGHT"}
            </Typography>
            <Typography className={classes.pricePerValue}>{`${transportationOffer.pricePerUnitInUsd}$ / ${
              peopleTransfer ? `person` : `1kg`
            } `}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default BoardNotice
