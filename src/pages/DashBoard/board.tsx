/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import ITransportationOffer from "model/transportationOffer"
import axios from "axios"
import { useAPICallback } from "hooks/useApiCallback"
import { DashboardContext } from "service/context/dashboardContext"
import { getTransportationOffers } from "../../service/api/transportationOffer"
import transportationOffer from "model/transportationOffer"

interface IBoardProps {
  notices: ITransportationOffer[]
  setNotices: React.Dispatch<React.SetStateAction<ITransportationOffer[]>>
  // searchQuery: string
}

const Board = ({ notices, setNotices }: IBoardProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const [page, setPage] = React.useState(1)
  const [scrolledBottom, setScrolledBottom] = React.useState(true)

  React.useEffect(() => {
    const processedNewOffers = async (): Promise<void> => {
      const newNotices = await getTransportationOffers(page, 10, dashboardContext.query)
      if (newNotices[0] && notices.length === 0)
        dashboardContext.handleSettingOffer({ transportationOffer: newNotices[0] })
      await setScrolledBottom(false)
      await setNotices((notices) => [...notices, ...newNotices])
    }

    if (scrolledBottom) {
      processedNewOffers()
    }
  }, [scrolledBottom, page, dashboardContext, notices.length, setNotices])

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
      {notices.map((x: ITransportationOffer, index: number) => {
        return <BoardNotice notice={x} key={index} />
      })}
    </Box>
  )
}

export default Board
