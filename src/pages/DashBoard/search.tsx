import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/searchStyles"

interface IDashBoardProps {}

const Search = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <img className={classes.searchIcon} src={require("./public/search-icon-36px.svg")} alt={"search-icon"} />
        <input className={classes.inputFieldFrom} type={"text"} placeholder={"from:"} />
        <Box className={classes.vLine}> </Box>
        <input className={classes.inputFieldFrom} type={"text"} placeholder={"to:"} />
        <Box className={classes.vLine}> </Box>
      </Box>
      <Box className={classes.contentDivider} />
    </Box>
  )
}

export default Search
