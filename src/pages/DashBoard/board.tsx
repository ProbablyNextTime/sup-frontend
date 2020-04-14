import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import { IBoardNotice } from "../../model/notice"
import axios from "axios"
import { useAPICallback } from "../../hooks/useApiCallback"

interface IBoardProps {}

const Board = (props: IBoardProps) => {
  const limit = 3
  const page = 1
  const [notices, setNotices] = React.useState(Array<IBoardNotice>())
  const [scrolledBottom, setScrolledBottom] = React.useState(true)

  const getNotices = useAPICallback(async (limit, page) => {
    try {
      const response = await axios.get("/api/notices/")
      const newNotices = response.data.notices as Array<IBoardNotice>
      setNotices((notices) => [...notices, ...newNotices])
    } catch (err) {
      console.log(err)
    }
  }, [])

  React.useEffect(() => {
    if (scrolledBottom) {
      getNotices(limit, page)
      setScrolledBottom(false)
    }
  }, [getNotices, scrolledBottom])

  function onScrollHandler() {
    const noticesContainer = document.getElementById("notices-container") || document.createElement("div")
    if (noticesContainer.scrollHeight - noticesContainer.scrollTop - noticesContainer.clientHeight < 1)
      setScrolledBottom(true)
  }

  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.sugBoardsBox}>
        <Typography variant="h4" component="p">
          Suggested Routes :
        </Typography>
      </Box>
      <Box id={"notices-container"} data-cy={"notices"} onScroll={onScrollHandler} className={classes.noticesWrapper}>
        {notices.map((x: IBoardNotice, index) => {
          return <BoardNotice notice={x} key={index} />
        })}
      </Box>
      <Box className={classes.infoMessageWrapper}>
        <Typography className={classes.infoMessage}>
          Haven`t found what you`ve been looking for? Try{" "}
          <a className={classes.altQueryMessage} href="#toto">
            altering your search query
          </a>
          !{" "}
        </Typography>
      </Box>
    </Box>
  )
}

export default Board
