import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import { Typography } from "@material-ui/core"
import { DashboardContext } from "service/context/dashboardContext"

const AdditionalDetails = () => {
  const dashboardContext = React.useContext(DashboardContext)
  const classes = useStyles()
  return (
    <Box className={classes.container} data-cy={"additionalDetails"}>
      <Typography className={classes.contentHeader}>ADDITIONAL DETAILS</Typography>
      {dashboardContext.transportationOffer.transportationProvider.additional_details.map((detail) => {
        return <Typography className={classes.detail}>- {detail}</Typography>
      })}
    </Box>
  )
}

export default AdditionalDetails
