import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"
import Board from "./board"
import Index from "./DashboardNoticeInfo"
import { IBoardNotice } from "../../model/notice"

interface IDashBoardProps {}

const DashBoard = (props: IDashBoardProps) => {
  const [selectedNotice, setSelectedNotice] = React.useState({ id: "1asdasda" } as IBoardNotice)
  const classes = useStyles()
  return (
    <Box className={classes.globalWrapper}>
      <NavigationBar />
      <Box className={classes.wrapper}>
        <Search />
        <Box className={classes.content}>
          <Box className={classes.boardWrapper}>
            <Board setSelectedNotice={setSelectedNotice} />
          </Box>
          <Index notice={selectedNotice} />
          <Box className={classes.mapWrapper}>
            <img
              className={classes.map}
              src={"https://imagevars.gulfnews.com/2015/8/2/1_16a0819534c.1560245_2074896705_16a0819534c_large.jpg"}
              alt={"map"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DashBoard
