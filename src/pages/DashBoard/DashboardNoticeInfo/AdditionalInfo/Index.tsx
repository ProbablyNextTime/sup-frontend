import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Check from "@material-ui/icons/Check"
import IconButton from "@material-ui/core/IconButton"
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons"
import { DashboardContext } from "service/context/dashboardContext"
import { transportationOfferTag } from "../../../../model/transportationOfferTag"

const AdditionalInfo = () => {
  const dashboardContext = React.useContext(DashboardContext)
  const isTrusted = true
  const transferPeople = false
  const [displayAll, setDisplayAll] = React.useState(false)
  const [numberOfTagsToDisplay, setNumberOfTagsToDisplay] = React.useState(5)
  const classes = useStyles()

  function handleDisplayMoreClick() {
    setDisplayAll(!displayAll)
    displayAll
      ? setNumberOfTagsToDisplay(5)
      : setNumberOfTagsToDisplay(dashboardContext.transportationOffer.transportationTags.length)
  }

  return (
    <Box className={classes.container}>
      <Typography
        className={classes.transferPeople}
        style={transferPeople ? { color: "#2dd75c" } : { color: "#ff9595" }}
      >
        {transferPeople ? "TRANSFER PEOPLE" : "DEAD WEIGHT"}
      </Typography>
      <Typography className={classes.contentHeader}>CARRIER</Typography>
      <Box className={classes.carrierInfo}>
        <Typography className={classes.userName} data-cy={"carrierName"}>
          {dashboardContext.transportationOffer.transportationProvider.name}
        </Typography>
        {isTrusted ? <Check className={classes.isTrusted} /> : <div />}
        <Typography
          className={classes.reviews}
        >{`${dashboardContext.transportationOffer.transportationProvider.reviewsReceived.length} reviews`}</Typography>
      </Box>
      <Typography className={classes.contentHeader}>CARGO TYPE</Typography>
      <Box className={classes.tags}>
        {dashboardContext.transportationOffer.transportationTags
          .slice(0, numberOfTagsToDisplay)
          .map((tag: transportationOfferTag) => {
            return <Box className={classes.tag}>{tag.name}</Box>
          })}
      </Box>
      {dashboardContext.transportationOffer.transportationTags.length >= 5 ? (
        <IconButton className={classes.displayAllWrapper} onClick={handleDisplayMoreClick}>
          {displayAll ? (
            <KeyboardArrowUp className={classes.controlArrow} />
          ) : (
            <KeyboardArrowDown className={classes.controlArrow} />
          )}
        </IconButton>
      ) : (
        <div />
      )}
    </Box>
  )
}

export default AdditionalInfo
