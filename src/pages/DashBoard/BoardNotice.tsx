import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Star from "@material-ui/icons/Star"
import { ArrowRightIcon } from "@material-ui/pickers/_shared/icons/ArrowRightIcon"
import { IBoardNotice } from "../../model/notice"
import { useSpring } from "react-spring"

interface IBoardNoticeProps {
  notice: IBoardNotice
  index: number
}

function getTags(tags: Array<string>) {
  let res = ""
  let index = 0
  for (index; index < tags.length - 1; index++) {
    res += `${tags[index]} - `
  }
  return (res += tags[index])
}

const BoardNotice = (props: IBoardNoticeProps) => {
  const [isSelected, setSelected] = React.useState(false)
  const classes = useStyles()
  const isTransfer = props.notice.peopleTransfer ? classes.isTransferPeople : classes.isNotTransferPeople
  const isTransferText = props.notice.peopleTransfer ? "PEOPLE TRANSFER" : "DEAD WEIGHT"
  const estimatedPrice = props.notice.peopleTransfer
    ? `${props.notice.estimatedPrice}$ per one `
    : `${props.notice.estimatedPrice} / 1kg`

  function selectCard() {
    setSelected(true)
  }

  const animateSelect = {
    backgroundColor: isSelected ? "Black" : "",
  }

  return (
    <Card className={classes.noticeCard} data-index={props.index}>
      <CardMedia className={classes.noticeMedia} image={props.notice.picUrl} title="..." />
      <CardContent className={classes.cardBody}>
        <Box className={classes.generalData}>
          <Typography className={classes.vehicleType}> {props.notice.vehicleType} </Typography>
          <Typography className={classes.vehicleInfo}>
            {" "}
            {props.notice.from} — {props.notice.to}{" "}
          </Typography>
        </Box>
        <Typography className={classes.noticeProvider}>{`by: ${props.notice.noticeProvider}`}</Typography>
        <hr className={classes.highlightMaxWeight} />
        <Box className={classes.noticeProvider}> {getTags(props.notice.tags)} </Box>
        <Typography className={isTransfer}>{isTransferText}</Typography>
        <Box className={classes.rating}>
          <Box className={classes.starRate}>
            <Star className={classes.starIcon} />
            <Typography className={classes.starRating}>{`${props.notice.rating} / 5`}</Typography>
          </Box>
          <Typography className={classes.reviews}>{`${props.notice.numberOfReviews} reviews`}</Typography>
        </Box>
        <Typography className={classes.estimatedPrice}>{estimatedPrice}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={selectCard}>
          <ArrowRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BoardNotice
