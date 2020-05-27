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

interface IBoardNoticeProps {
  transportationOffer: ITransportationOffer
  isSelectable: boolean
}

const BoardNotice = ({ transportationOffer, isSelectable }: IBoardNoticeProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const peopleTransfer = true
  const isTrusted = true
  const classes = useStyles()

  return (
    <Card
      elevation={0}
      className={classNames.default(
        classes.boardNoticeWrapper,
        transportationOffer.isPremium && classes.premiumBackground
      )}
      onClick={() => {
        isSelectable && dashboardContext.handleSettingOffer({ transportationOffer: transportationOffer })
      }}
    >
      <Box className={classes.cardContent}>
        <Box className={classes.leftSideContent}>
          <Box className={classes.mainInfo}>
            <Box className={classes.route}>
              {transportationOffer.isPremium && <Star className={classes.premiumStar} fontSize={"small"} />}
              <Typography
                className={classNames.default(classes.routeText, transportationOffer.isPremium && classes.premiumFont)}
              >{`${transportationOffer.departurePoint} - ${transportationOffer.destinationPoint}`}</Typography>
            </Box>
            <Typography className={classes.transferNumber}>{transportationOffer.transferNumber}</Typography>
          </Box>
          <Box className={classes.tags}>
            {transportationOffer.transportationTags.map((tag: ITransportationOfferTag) => {
              return (
                <Box className={classes.tag} style={{ border: `1px solid #000000`, color: "#000000" }}>
                  {tag.name}
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
          <Typography
            className={`${classes.cardBottomContent} ${transportationOffer.isPremium && classes.premiumFont}`}
          >
            {transportationOffer.pickupPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{transportationOffer.departureDate}</Typography>
        </Box>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>FINAL DELIVERY</Typography>
          <Typography
            className={classNames.default(
              classes.cardBottomContent,
              transportationOffer.isPremium && classes.premiumFont
            )}
          >
            {transportationOffer.deliveryPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{transportationOffer.arrivalDate}</Typography>
        </Box>
        <Box className={classes.carrier}>
          <Typography className={classes.cardBottomContentHeader}>CARRIER</Typography>
          <Box className={classes.carrierInfo}>
            <Typography
              className={classNames.default(
                classes.cardBottomContent,
                transportationOffer.isPremium && classes.premiumFont
              )}
            >
              {transportationOffer.transportationProvider.name}
            </Typography>
            {isTrusted && (
              <Check
                className={classNames.default(
                  classes.isTrusted,
                  transportationOffer.isPremium && classes.premiumCheckSign
                )}
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
    </Card>
  )
}

export default BoardNotice
