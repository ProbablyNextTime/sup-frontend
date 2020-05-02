/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import ITransportationOffer from "../../model/transportationOffer"
import axios from "axios"
import { useAPICallback } from "../../hooks/useApiCallback"
import { DashboardContext } from "../../service/context/dashboardContext"
import transportationOffer from "../../model/transportationOffer"

interface IBoardProps {}

const Board = (props: IBoardProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const [page, setPage] = React.useState(1)
  const [notices, setNotices] = React.useState([] as ITransportationOffer[])
  const [scrolledBottom, setScrolledBottom] = React.useState(true)
  const getNotices = useAPICallback(async (page) => {
    try {
      const response = await axios.get("http://localhost:5000/api/transportation_offer?page=1&page_size=10")
      const newNotices = response.data as Array<ITransportationOffer>
      setNotices((notices) => [...notices, ...newNotices])
      return newNotices
    } catch (err) {
      console.log(err)
    }
  }, [])

  React.useEffect(() => {
    if (scrolledBottom) {
      getNotices(page)
        .then((notices) => {
          if (notices[0] !== undefined) {
            dashboardContext.handleSettingOffer({ transportationOffer: notices[0] })
          }
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
    <Box id={"notices-container"} data-cy={"notices"} onScroll={onScrollHandler} className={classes.dashboard}>
      {notices.map((x: ITransportationOffer, index) => {
        return <BoardNotice notice={x} key={index} />
      })}
    </Box>
  )
}

export default Board
