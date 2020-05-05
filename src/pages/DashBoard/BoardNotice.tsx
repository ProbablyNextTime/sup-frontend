import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import ITransportationOffer from "model/transportationOffer"
import Check from "@material-ui/icons/Check"
import { DashboardContext } from "service/context/dashboardContext"

interface IBoardNoticeProps {
  transportationOffer: ITransportationOffer
}

const premiumFont = { color: "#fed133" }
const premiumBackground = { backgroundColor: "#fffff2", border: "solid 1px #fcff6c" }

const tags = ["truck", "mom"]

const BoardNotice = ({ transportationOffer }: IBoardNoticeProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const peopleTransfer = true
  const isTrusted = true
  const classes = useStyles()

  function selectThisNotice() {
    dashboardContext.handleSettingOffer({ transportationOffer: transportationOffer })
  }

  return (
    <Card
      elevation={0}
      className={classes.boardNoticeWrapper}
      style={transportationOffer.isPremium ? premiumBackground : {}}
      onClick={selectThisNotice}
    >
      <Box className={classes.cardContent}>
        <Box className={classes.leftSideContent}>
          <Box className={classes.mainInfo}>
            <Box className={classes.route}>
              {transportationOffer.isPremium ? <Star className={classes.premiumStar} fontSize={"small"} /> : <div />}
              <Typography
                className={classes.routeText}
                style={transportationOffer.isPremium ? premiumFont : {}}
              >{`${transportationOffer.departurePoint} - ${transportationOffer.destinationPoint}`}</Typography>
            </Box>
            <Typography className={classes.transferNumber}>{transportationOffer.transferNumber}</Typography>
          </Box>
          <Box className={classes.tags}>
            {tags.map((tag) => {
              const themeColor = "#000000"
              return (
                <Box className={classes.tag} style={{ border: `1px solid ${themeColor}`, color: themeColor }}>
                  {tag}
                </Box>
              )
            })}
          </Box>
        </Box>
        <Typography
          className={classes.reviews}
        >{`${transportationOffer.transportationProvider.reviewsReceived.length} reviews`}</Typography>
      </Box>
      <Box className={classes.contentDivider} />
      <Box className={classes.cardContent}>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>PICK UP</Typography>
          <Typography className={classes.cardBottomContent} style={transportationOffer.isPremium ? premiumFont : {}}>
            {transportationOffer.pickupPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{transportationOffer.departureDate}</Typography>
        </Box>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>FINAL DELIVERY</Typography>
          <Typography className={classes.cardBottomContent} style={transportationOffer.isPremium ? premiumFont : {}}>
            {transportationOffer.deliveryPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{transportationOffer.arrivalDate}</Typography>
        </Box>
        <Box className={classes.carrier}>
          <Typography className={classes.cardBottomContentHeader}>CARRIER</Typography>
          <Box className={classes.carrierInfo}>
            <Typography className={classes.cardBottomContent} style={transportationOffer.isPremium ? premiumFont : {}}>
              {transportationOffer.transportationProvider.name}
            </Typography>
            {isTrusted ? (
              <Check
                className={classes.isTrusted}
                style={transportationOffer.isPremium ? { color: "#fed133", border: "solid 1px #fcff6c" } : {}}
              />
            ) : (
              <div />
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
    </Card>
  )
}

export default BoardNotice
