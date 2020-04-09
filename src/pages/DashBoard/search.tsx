import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/searchStyles"

interface IDashBoardProps {}

const Search = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <img className={classes.searchIcon} src={require("./public/search-icon-36px.svg")} alt={"search-icon"} />
      <input className={classes.inputField} type={"text"}></input>
    </Box>
  )
}

export default Search
