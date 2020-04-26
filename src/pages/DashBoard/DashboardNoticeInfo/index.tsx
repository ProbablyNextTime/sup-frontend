import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import MainInfo from "./MainInfo"
import { IBoardNotice } from "../../../model/notice"
import AdditionalInfo from "./AdditionalInfo/Index"
import Details from "./Details"
import AdditionalDetails from "./AdditionalDetails"

interface IDashBoardProps {
  notice: IBoardNotice
}

const DashboardNoticeInfo = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.boardNoticeInfoWrapper}>
      <MainInfo notice={{ ...props.notice }} />
      <AdditionalInfo notice={{ ...props.notice }} />
      <Details notice={props.notice} />
      <AdditionalDetails additionalDetails={props.notice.transportationProvider.additional_details} />
    </Box>
  )
}

export default DashboardNoticeInfo
