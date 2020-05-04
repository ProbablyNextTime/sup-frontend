/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import ITransportationOffer from "../../model/transportationOffer"
import axios from "axios"
import { useAPICallback } from "../../hooks/useApiCallback"
import { DashboardContext } from "../../service/context/dashboardContext"
import ISearchQuery from "../../model/search_query"

interface IBoardProps {
  notices: Array<ITransportationOffer>
  setNotices: React.Dispatch<React.SetStateAction<Array<ITransportationOffer>>>
  searchQuery: string
}

const Board = (props: IBoardProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const [page, setPage] = React.useState(1)
  const [scrolledBottom, setScrolledBottom] = React.useState(true)
  const getNotices = useAPICallback(async (page) => {
    const response = await axios.get(
      `http://localhost:5000/api/transportation_offer?query=${props.searchQuery}&page=${page}&page_size=10`
    )
    const newNotices = response.data as Array<ITransportationOffer>
    props.setNotices((notices) => [...notices, ...newNotices])
    return newNotices
  }, [])

  React.useEffect(() => {
    if (scrolledBottom) {
      getNotices(page)
        .then((notices) => {
          if (notices[0] !== undefined) dashboardContext.handleSettingOffer({ transportationOffer: notices[0] })
          setScrolledBottom(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [getNotices, scrolledBottom, page, props, dashboardContext])

  function onScrollHandler() {
    const noticesContainer = document.getElementById("notices-container") || document.createElement("div")
    if (noticesContainer.scrollHeight - noticesContainer.scrollTop - noticesContainer.clientHeight < 1) {
      setPage(page + 1)
      setScrolledBottom(true)
    }
  }

  const classes = useStyles()
  return (
    <Box id={"notices-container"} data-cy={"offers"} onScroll={onScrollHandler} className={classes.dashboard}>
      {props.notices.map((x: ITransportationOffer, index) => {
        return <BoardNotice notice={x} key={index} />
      })}
    </Box>
  )
}

export default Board
