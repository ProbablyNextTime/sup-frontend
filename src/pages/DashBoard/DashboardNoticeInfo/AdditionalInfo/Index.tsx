import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import Typography from "@material-ui/core/Typography"
import Check from "@material-ui/icons/Check"
import IconButton from "@material-ui/core/IconButton"
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons"
import { DashboardContext } from "../../../../service/context/dashboardContext"

interface IDashBoardProps {}

function makePoint(point: string): string {
  if (point === undefined) return ""
  return point.slice(2)
}

const tags = [
  "premium",
  "truck",
  "cargo",
  "up to 200kg",
  "glass",
  "fast delivery",
  "premium",
  "Fuck you",
  "Suck",
  "Dyrka",
  "ebat",
  "fast sex",
]

const AdditionalInfo = (props: IDashBoardProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const isTrusted = true
  const transferPeople = false
  const [displayAll, setDisplayAll] = React.useState(false)
  const [numberOfTagsToDisplay, setNumberOfTagsToDisplay] = React.useState(5)
  const classes = useStyles()

  function handleDisplayMoreClick() {
    setDisplayAll(!displayAll)
    displayAll ? setNumberOfTagsToDisplay(5) : setNumberOfTagsToDisplay(tags.length)
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
        <Typography className={classes.userName}>
          {makePoint(dashboardContext.transportationOffer.transportationProvider.name)}
        </Typography>
        {isTrusted ? <Check className={classes.isTrusted} /> : <div />}
        <Typography
          className={classes.reviews}
        >{`${dashboardContext.transportationOffer.transportationProvider.reviewsReceived.length} reviews`}</Typography>
      </Box>
      <Typography className={classes.contentHeader}>CARGO TYPE</Typography>
      <Box className={classes.tags}>
        {tags.slice(0, numberOfTagsToDisplay).map((tag) => {
          return <Box className={classes.tag}>{tag}</Box>
        })}
      </Box>
      {tags.length >= 5 ? (
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
