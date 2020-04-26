import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"
import Board from "./board"
import DashboardNoticeInfo from "./DashboardNoticeInfo"
import { IBoardNotice } from "../../model/notice"
import { FormatUnderlined } from "@material-ui/icons"
import { transportation_provider } from "../../model/transportation_provider"
import ISearchQuery from "../../model/search_query"

interface IDashBoardProps {}

const defaultNotice: IBoardNotice = {
  additionalInfo: "default",
  departureDate: "default",
  arrivalDate: "default",
  cargo: {},
  deliveryPlace: "default",
  departurePoint: "default",
  depositValueInUsd: 0,
  destinationPoint: "default",
  id: "null",
  paymentStatus: "default",
  pickupPlace: "default",
  pricePerValueInUsd: 0,
  status: "default",
  title: "default",
  transferNumber: "default",
  isPremium: false,
  transportationProvider: {
    reviewsReceived: [],
    additional_details: ["asdasdasdas", "sdasdasdasdasd", "sdadasdasdasdasd"],
    id: "null",
    name: "name",
  } as transportation_provider,
  transportationTags: [],
}

const DashBoard = (props: IDashBoardProps) => {
  const [selectedNotice, setSelectedNotice] = React.useState<IBoardNotice>(defaultNotice)
  const [searchQuery, setSearchQuery] = React.useState({ to: "", from: "", dateTo: "", dateFrom: "" } as ISearchQuery)
  const classes = useStyles()
  return (
    <Box className={classes.globalWrapper}>
      <NavigationBar />
      <Box className={classes.wrapper}>
        <Search setSearchQuery={setSearchQuery} />
        <Box className={classes.content}>
          <Box className={classes.boardWrapper}>
            <Board selectedNotice={selectedNotice} setSelectedNotice={setSelectedNotice} />
          </Box>
          <DashboardNoticeInfo notice={selectedNotice} />
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
