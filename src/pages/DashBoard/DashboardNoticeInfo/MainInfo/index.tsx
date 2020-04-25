import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import { IBoardNotice } from "../../../../model/notice"

interface IMainInfoProps {
  notice: IBoardNotice
}

const premiumFont = { color: "#fed133" }

function makePoint(point: string): string {
  if (point === undefined) return ""
  return point.slice(2)
}

const MainInfo = (props: IMainInfoProps) => {
  const premium = true
  const classes = useStyles()
  console.log(props.notice)
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
        <Typography className={classes.contentHeader}>TRANSFER NUMBER</Typography>
        <Box className={classes.transferNumber}>
          {premium ? <Star className={classes.premiumStar} fontSize={"small"} /> : <div />}
          <Typography className={classes.transferNumberText} style={premium ? premiumFont : {}}>
            {props.notice.transferNumber}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.mainContent}>
        <Box className={classes.departureInfo}>
          <Typography className={classes.contentHeader}>PICK UP</Typography>
          <Typography className={classes.contentText}>{makePoint(props.notice.departurePoint)}</Typography>
          <Typography className={classes.contentHeader}>AT</Typography>
          <Typography className={classes.placeText}>{makePoint(props.notice.pickupPlace)}</Typography>
          <Typography className={classes.date}>{props.notice.departureDate}</Typography>
        </Box>
        <Box className={classes.deliveryInfo}>
          <Typography className={classes.contentHeader}>FINAL DELIVERY</Typography>
          <Typography className={classes.contentText}>{props.notice.destinationPoint}</Typography>
          <Typography className={classes.contentHeader}>AT</Typography>
          <Typography className={classes.placeText}>{props.notice.deliveryPlace}</Typography>
          <Typography className={classes.date}>{props.notice.arrivalDate}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MainInfo
