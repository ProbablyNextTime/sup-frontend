import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import MainInfo from "./MainInfo"
import { IBoardNotice } from "../../../model/notice"

interface IDashBoardProps {
  notice: IBoardNotice
}

const DashboardNoticeInfo = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.boardNoticeInfoWrapper}>
      <MainInfo notice={props.notice} />
    </Box>
  )
}

export default DashboardNoticeInfo
