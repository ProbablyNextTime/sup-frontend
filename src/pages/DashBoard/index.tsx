import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"
import Board from "./board"

interface IDashBoardProps {}

const DashBoard = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box>
      <NavigationBar />
      <div className={classes.wrapper}>
        <Search />
        <Box className={classes.content}>
          <div className={classes.boardWrapper}>
            <Board />
          </div>
          <div className={classes.mapWrapper}>
            <img
              className={classes.map}
              src={"https://imagevars.gulfnews.com/2015/8/2/1_16a0819534c.1560245_2074896705_16a0819534c_large.jpg"}
              alt={"map"}
            />
            <hr />
            <hr />
            <hr />
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default DashBoard
