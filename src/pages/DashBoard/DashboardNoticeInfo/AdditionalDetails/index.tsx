import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import { IBoardNotice } from "../../../../model/notice"
import { Typography } from "@material-ui/core"

interface IDashBoardProps {
  additionalDetails: Array<string>
}

const AdditionalDetails = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography className={classes.contentHeader}>ADDITIONAL DETAILS</Typography>
      {props.additionalDetails.map((detail) => {
        return <Typography className={classes.detail}>- {detail}</Typography>
      })}
    </Box>
  )
}

export default AdditionalDetails
