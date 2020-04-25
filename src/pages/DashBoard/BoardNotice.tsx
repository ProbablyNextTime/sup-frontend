import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import { IBoardNotice } from "../../model/notice"
import Check from "@material-ui/icons/Check"

interface IBoardNoticeProps {
  setSelected: React.Dispatch<React.SetStateAction<IBoardNotice>>
  notice: IBoardNotice
  key: number
}

function makePoint(point: string): string {
  return point.slice(2)
}

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const premiumFont = { color: "#fed133" }
const premiumBackground = { backgroundColor: "#fffff2", border: "solid 1px #fcff6c" }

const tags = ["truck", "mom"]

const BoardNotice = (props: IBoardNoticeProps) => {
  const premium = false
  const peopleTransfer = true
  const isTrusted = true
  const carrier = "California inc."
  const classes = useStyles()

  function selectThisNotice() {
    props.setSelected(props.notice)
  }

  return (
    <Card
      elevation={0}
      data-index={props.key}
      className={classes.boardNoticeWrapper}
      style={premium ? premiumBackground : {}}
      onClick={selectThisNotice}
    >
      <Box className={classes.cardContent}>
        <Box className={classes.leftSideContent}>
          <Box className={classes.mainInfo}>
            <Box className={classes.route}>
              {premium ? <Star className={classes.premiumStar} fontSize={"small"} /> : <div />}
              <Typography className={classes.routeText} style={premium ? premiumFont : {}}>{`${makePoint(
                props.notice.departurePoint
              )} - ${makePoint(props.notice.destinationPoint)}`}</Typography>
            </Box>
            <Typography className={classes.transferNumber}>{props.notice.transferNumber}</Typography>
          </Box>
          <Box className={classes.tags}>
            {tags.map((x) => {
              const themeColor = getRandomColor()
              return (
                <Box className={classes.tag} style={{ border: `1px solid ${themeColor}`, color: themeColor }}>
                  {x}
                </Box>
              )
            })}
          </Box>
        </Box>
        <Typography className={classes.reviews}>54 reviews</Typography>
      </Box>
      <Box className={classes.contentDivider}></Box>
      <Box className={classes.cardContent}>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>PICK UP</Typography>
          <Typography className={classes.cardBottomContent} style={premium ? premiumFont : {}}>
            {props.notice.pickupPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{props.notice.departureDate}</Typography>
        </Box>
        <Box className={classes.pickUpPlace}>
          <Typography className={classes.cardBottomContentHeader}>FINAL DELIVERY</Typography>
          <Typography className={classes.cardBottomContent} style={premium ? premiumFont : {}}>
            {props.notice.deliveryPlace}
          </Typography>
          <Typography className={classes.cardBottomDate}>{props.notice.arrivalDate}</Typography>
        </Box>
        <Box className={classes.carrier}>
          <Typography className={classes.cardBottomContentHeader}>CARRIER</Typography>
          <Box className={classes.carrierInfo}>
            <Typography className={classes.cardBottomContent} style={premium ? premiumFont : {}}>
              {carrier}
            </Typography>
            {isTrusted ? (
              <Check
                className={classes.isTrusted}
                style={premium ? { color: "#fed133", border: "solid 1px #fcff6c" } : {}}
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
          <Typography className={classes.pricePerValue}>{`${props.notice.pricePerValueInUsd}$ / ${
            peopleTransfer ? `person` : `1kg`
          } `}</Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default BoardNotice
