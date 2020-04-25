import * as React from "react"
import { Box } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import { IBoardNotice } from "../../model/notice"
import axios from "axios"
import { useAPICallback } from "../../hooks/useApiCallback"

interface IBoardProps {
  setSelectedNotice: React.Dispatch<React.SetStateAction<IBoardNotice>>
}

const Board = (props: IBoardProps) => {
  const [page, setPage] = React.useState(1)
  const [notices, setNotices] = React.useState([] as IBoardNotice[])
  const [scrolledBottom, setScrolledBottom] = React.useState(true)
  const getNotices = useAPICallback(async (page) => {
    try {
      const response = await axios.get("http://localhost:5000/api/transportation_offer?page=1&page_size=10")
      const newNotices = response.data as Array<IBoardNotice>
      setNotices((notices) => [...notices, ...newNotices])
    } catch (err) {
      console.log(err)
    }
  }, [])

  React.useEffect(() => {
    if (scrolledBottom) {
      getNotices(page)
      setScrolledBottom(false)
    }
  }, [getNotices, scrolledBottom, page])

  function onScrollHandler() {
    const noticesContainer = document.getElementById("notices-container") || document.createElement("div")
    if (noticesContainer.scrollHeight - noticesContainer.scrollTop - noticesContainer.clientHeight < 1)
      setScrolledBottom(true)
  }

  const classes = useStyles()
  return (
    <Box id={"notices-container"} data-cy={"notices"} onScroll={onScrollHandler} className={classes.dashboard}>
      {notices.map((x: IBoardNotice, index) => {
        return <BoardNotice setSelected={props.setSelectedNotice} notice={x} key={index} />
      })}
    </Box>
  )
}

export default Board
