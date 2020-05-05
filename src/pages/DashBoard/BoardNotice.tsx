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
  notice: ITransportationOffer
}

function makePoint(point: string): string {
  return point.slice(2)
}

const premiumFont = { color: "#fed133" }
const premiumBackground = { backgroundColor: "#fffff2", border: "solid 1px #fcff6c" }

const tags = ["truck", "mom"]

const BoardNotice = (props: IBoardNoticeProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const peopleTransfer = true
  const isTrusted = true
  const classes = useStyles()

  function selectThisNotice() {
    dashboardContext.handleSettingOffer({ transportationOffer: props.notice })
  }

  return (
    <Card
      elevation={0}
      className={classes.boardNoticeWrapper}
      style={props.notice.isPremium ? premiumBackground : {}}
      onClick={selectThisNotice}
    >
      <Box className={classes.cardContent}>
        <Box className={classes.leftSideContent}>
          <Box className={classes.mainInfo}>
            <Box className={classes.route}>
              {props.notice.isPremium ? <Star className={classes.premiumStar} fontSize={"small"} /> : <div />}
              <Typography className={classes.routeText} style={props.notice.isPremium ? premiumFont : {}}>{`${makePoint(
                props.notice.departurePoint
              )} - ${makePoint(props.notice.destinationPoint)}`}</Typography>
            </Box>
            <Typography className={classes.transferNumber}>{props.notice.transferNumber}</Typography>
          </Box>
          <Box className={classes.tags}>
            {tags.map((x) => {
              const themeColor = "#000000"
              return (
                <Box className={classes.tag} style={{ border: `1px solid ${themeColor}`, color: themeColor }}>
                  {x}
                </Box>
              )
            })}
          </Box>
        </Box>
        <Typography
          className={classes.reviews}
        >{`${props.notice.transportationProvider.reviewsReceived.length} reviews`}</Typography>
      </Box>
      <Box className={classes.contentDivider} />
      <Box className={classes.cardContent}>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>PICK UP</Typography>
          <Typography className={classes.cardBottomContent} style={props.notice.isPremium ? premiumFont : {}}>
            {props.notice.pickupPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{props.notice.departureDate}</Typography>
        </Box>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>FINAL DELIVERY</Typography>
          <Typography className={classes.cardBottomContent} style={props.notice.isPremium ? premiumFont : {}}>
            {props.notice.deliveryPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{props.notice.arrivalDate}</Typography>
        </Box>
        <Box className={classes.carrier}>
          <Typography className={classes.cardBottomContentHeader}>CARRIER</Typography>
          <Box className={classes.carrierInfo}>
            <Typography className={classes.cardBottomContent} style={props.notice.isPremium ? premiumFont : {}}>
              {makePoint(props.notice.transportationProvider.name)}
            </Typography>
            {isTrusted ? (
              <Check
                className={classes.isTrusted}
                style={props.notice.isPremium ? { color: "#fed133", border: "solid 1px #fcff6c" } : {}}
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
          <Typography className={classes.pricePerValue}>{`${props.notice.pricePerUnitInUsd}$ / ${
            peopleTransfer ? `person` : `1kg`
          } `}</Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default BoardNotice
