import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/searchStyles"
import DateMomentUtils from "@date-io/moment"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import { CalendarToday } from "@material-ui/icons"
import { useAPICallback } from "../../hooks/useApiCallback"
import ITransportationOffer from "../../model/transportationOffer"
import axios from "axios"
import { getTransportationOffers } from "../../service/api/transportationOffer"
import { DashboardContext } from "../../service/context/dashboardContext"

interface ISearchProps {
  setNotices: React.Dispatch<React.SetStateAction<ITransportationOffer[]>>
  // setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setNotices }: ISearchProps) => {
  const classes = useStyles()
  const dashboardContext = React.useContext(DashboardContext)
  const [arrivalDate, setArrivalDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [departureDate, setDepartureDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)

  const getNotices = useAPICallback(
    async (query) => {
      const newNotices = await getTransportationOffers(1, 10, query)
      if (newNotices[0] && newNotices.length === 0)
        dashboardContext.handleSettingOffer({ transportationOffer: newNotices[0] })
      await setNotices(newNotices)
    },
    [],
    { debounceDelay: 500 }
  )

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    dashboardContext.handleSettingQuery(e.target.value)
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
          data-cy={"searchField"}
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
