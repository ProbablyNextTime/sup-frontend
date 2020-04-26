import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/searchStyles"
import DateMomentUtils from "@date-io/moment"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import { CalendarToday } from "@material-ui/icons"
import ISearchQuery from "../../model/search_query"
import { useAPICallback } from "../../hooks/useApiCallback"
import FormControl from "@material-ui/core/FormControl"

interface ISearchProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<ISearchQuery>>
  searchQuery: ISearchQuery
}

const Search = (props: ISearchProps) => {
  const classes = useStyles()
  const [arrivalDate, setArrivalDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [departureDate, setDepartureDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)

  const updateQuery = useAPICallback((e) => {
    console.log(e)
  }, [])

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <SearchIcon className={classes.searchIcon} />
        <TextField className={classes.inputSearchText} type="text" color="primary" placeholder={"from:"} />
        <Box className={classes.vLine}> </Box>
        <TextField className={classes.inputSearchText} type="text" color="primary" placeholder={"to:"} />
        <Box className={classes.vLine}> </Box>
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
          <CalendarToday className={classes.calendarIcon} />
          <DatePicker
            disablePast={true}
            className={classes.inputSearchDate}
            value={departureDate}
            onChange={setDepartureDate}
          />
          <Box className={classes.vLine}> </Box>
          <CalendarToday className={classes.calendarIcon} />
          <DatePicker
            disablePast={true}
            className={classes.inputSearchDate}
            value={arrivalDate}
            onChange={setArrivalDate}
          />
        </MuiPickersUtilsProvider>
      </Box>
    </Box>
  )
}

export default Search
