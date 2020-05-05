import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import ITransportationOffer from "model/transportationOffer"
import { DashboardContext } from "service/context/dashboardContext"
import { getTransportationOffers } from "service/api/transportationOffer"

interface IBoardProps {
  transportationOffers: ITransportationOffer[]
  setTransportationOffers: React.Dispatch<React.SetStateAction<ITransportationOffer[]>>
}

const Board = ({ transportationOffers, setTransportationOffers }: IBoardProps) => {
  const dashboardContext = React.useContext(DashboardContext)
  const [page, setPage] = React.useState(1)
  const [scrolledBottom, setScrolledBottom] = React.useState(true)

  React.useEffect(() => {
    const processedNewOffers = async (): Promise<void> => {
      await setScrolledBottom(false)
      const newNotices = await getTransportationOffers(page, 10, dashboardContext.query)
      if (newNotices[0] && transportationOffers.length === 0)
        dashboardContext.handleSettingOffer({ transportationOffer: newNotices[0] })
      await setTransportationOffers((notices) => [...notices, ...newNotices])
    }

    if (scrolledBottom) {
      processedNewOffers()
    }
  }, [dashboardContext, transportationOffers.length, page, scrolledBottom, setTransportationOffers])

  async function onScrollHandler() {
    const noticesContainer = document.getElementById("notices-container") || document.createElement("div")
    if (noticesContainer.scrollHeight - noticesContainer.scrollTop - noticesContainer.clientHeight < 1) {
      setPage(page + 1)
      setScrolledBottom(true)
    }
  }

  const classes = useStyles()
  return (
    <Box id={"notices-container"} data-cy={"offers"} onScroll={onScrollHandler} className={classes.dashboard}>
      {transportationOffers.map((transportationOffer: ITransportationOffer, index: number) => {
        return <BoardNotice transportationOffer={transportationOffer} key={index} />
      })}
    </Box>
  )
}

export default Board
