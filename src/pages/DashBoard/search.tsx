import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/searchStyles"
import DateMomentUtils from "@date-io/moment"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"

interface IDashBoardProps {}

const Search = (props: IDashBoardProps) => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <SearchIcon className={classes.searchIcon} />
        <TextField className={classes.inputSearch} type="text" color="primary" placeholder={"from:"} />
        <Box className={classes.vLine}> </Box>
        <TextField className={classes.inputSearch} type="text" color="primary" placeholder={"to:"}></TextField>
        <Box className={classes.vLine}> </Box>
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <DatePicker className={classes.inputSearch} value={selectedDate} onChange={handleDateChange} />
          <Box className={classes.vLine}> </Box>
          <DatePicker className={classes.inputSearch} value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
      </Box>
    </Box>
  )
}

export default Search
