import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import { IBoardNotice } from "../../../../model/notice"
import Typography from "@material-ui/core/Typography"
import { Check } from "@material-ui/icons"

interface IDashBoardProps {
  notice: IBoardNotice
}

const Details = (props: IDashBoardProps) => {
  const chosenPercentage = 72
  const successfulDeliveriesPercentage = 100
  const mostPopularDeliveryGood = "People"
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.contentHeader}>DETAILS</Typography>
      <Box className={classes.detail}>
        <Check className={classes.checkSign} />
        <Typography className={classes.detailText}>
          This carries has been chosen in
          <span className={classes.highlightedText}>{`${chosenPercentage}%`}</span> of deliveries.
        </Typography>
      </Box>
      <Box className={classes.detail}>
        <Check className={classes.checkSign} />
        <Typography className={classes.detailText}>
          Successful deliveries:
          <span className={classes.highlightedText}>{`${successfulDeliveriesPercentage}%`}</span>
        </Typography>
      </Box>
      <Box className={classes.detail}>
        <Check className={classes.checkSign} />
        <Typography className={classes.detailText}>
          Most popular delivery good:
          <span className={classes.highlightedText}>{mostPopularDeliveryGood}</span>
        </Typography>
      </Box>
    </Box>
  )
}

export default Details
