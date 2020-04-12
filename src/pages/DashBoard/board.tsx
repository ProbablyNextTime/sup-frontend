import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import BoardNotice from "./BoardNotice"
import { IBoardNotice } from "../../model/notice"

interface IBoardProps {
  notices: Array<IBoardNotice>
}

const Board = (props: IBoardProps) => {
  console.log(props)
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.sugBoardsBox}>
        <Typography variant="h4" component="p">
          Suggested Routes :
        </Typography>
      </Box>
      {props.notices.map((x: IBoardNotice, key) => {
        return <BoardNotice notice={x} index={key} />
      })}
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
