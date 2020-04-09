import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"

interface IDashBoardProps {}

const DashBoard = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box>
      <NavigationBar />
      <div className={classes.wrapper}>
        <div className={classes.boardWrapper}>
          <Search />
          <p>xyi</p>
          <p>xyi</p>
          <p>xyi</p>
        </div>
        <div className={classes.mapWrapper}></div>
      </div>
    </Box>
  )
}

export default DashBoard
