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
import ITransportationOffer from "../../model/transportationOffer"
import axios from "axios"

interface ISearchProps {
  setNotices: React.Dispatch<React.SetStateAction<Array<ITransportationOffer>>>
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  searchQuery: string
}

const Search = (props: ISearchProps) => {
  const classes = useStyles()
  const [arrivalDate, setArrivalDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [departureDate, setDepartureDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)

  const getNotices = useAPICallback(
    async (query) => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/transportation_offer?query=${query}&page=1&page_size=10`
        )
        const newNotices = response.data as Array<ITransportationOffer>
        props.setNotices(newNotices)
        return newNotices
      } catch (err) {
        console.log(err)
      }
    },
    [],
    { debounceDelay: 600 }
  )

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    props.setSearchQuery(e.target.value)
    await getNotices(e.target.value)
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <SearchIcon className={classes.searchIcon} />
        <TextField
          className={classes.inputSearchText}
          type="text"
          color="primary"
          placeholder={"from:"}
          onChange={handleSearchChange}
        />
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
