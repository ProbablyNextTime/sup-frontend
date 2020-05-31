import * as React from "react"
import { Box, IconButton } from "@material-ui/core"
import useStyles from "./Styles/searchStyles"
import DateMomentUtils from "@date-io/moment"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import { CalendarToday } from "@material-ui/icons"
import { useAPICallback } from "hooks/useApiCallback"
import ITransportationOffer from "model/transportationOffer"
import { getTransportationOffers } from "service/api/transportationOffer"
import { DashboardContext } from "service/dashboardContext/dashboardContext"
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons"

interface ISearchProps {
  setTransportationOffers: React.Dispatch<React.SetStateAction<ITransportationOffer[]>>
  width: number
}

const Search = ({ width, setTransportationOffers }: ISearchProps) => {
  const classes = useStyles()
  const dashboardContext = React.useContext(DashboardContext)
  const [arrivalDate, setArrivalDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [departureDate, setDepartureDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [isSearchExpanded, setIsSearchExpended] = React.useState<boolean>(false)

  const handleSearchChange = useAPICallback(
    async (query: string) => {
      dashboardContext.handleSettingQuery(query)
      const newNotices = await getTransportationOffers(1, 10, query)
      if (newNotices[0] && newNotices.length === 0)
        dashboardContext.handleSettingOffer({ transportationOffer: newNotices[0] })
      await setTransportationOffers(newNotices)
    },
    [],
    { debounceDelay: 500 }
  )

  return (
    <Box className={classes.wrapper}>
      <Box className={isSearchExpanded && width < 850 ? classes.expandedContainer : classes.container}>
        <Box className={classes.inputWrapper}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            className={classes.inputSearchText}
            type="text"
            color="primary"
            placeholder={"route:"}
            // event decomposition due to specifics of synthetic events
            onChange={({ target: { value } }) => handleSearchChange(value)}
            data-cy={"searchField"}
          />
        </Box>
        {width > 850 && <Box className={classes.vLine}> </Box>}
        {(width > 850 || isSearchExpanded) && (
          <MuiPickersUtilsProvider utils={DateMomentUtils}>
            <Box className={classes.inputWrapper}>
              <CalendarToday className={classes.calendarIcon} />
              <DatePicker
                disablePast={true}
                className={classes.inputSearchDate}
                value={departureDate}
                onChange={setDepartureDate}
              />
            </Box>
            {width > 850 && <Box className={classes.vLine}> </Box>}
            <Box className={classes.inputWrapper}>
              <CalendarToday className={classes.calendarIcon} />
              <DatePicker
                disablePast={true}
                className={classes.inputSearchDate}
                value={arrivalDate}
                onChange={setArrivalDate}
              />
            </Box>
          </MuiPickersUtilsProvider>
        )}
        {!isSearchExpanded && width < 850 && (
          <IconButton className={classes.searchControls} onClick={() => setIsSearchExpended(true)}>
            <KeyboardArrowDown />
          </IconButton>
        )}
        {isSearchExpanded && width < 850 && (
          <IconButton className={classes.searchControls} onClick={() => setIsSearchExpended(false)}>
            <KeyboardArrowUp />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}

export default Search
