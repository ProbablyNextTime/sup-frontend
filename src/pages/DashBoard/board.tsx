import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
import { useState } from "react"
import BoardNotice from "./BoardNotice"

interface IBoardProps {
  notices: any
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
      {props.notices.map((x: any) => {
        return <BoardNotice data={x}></BoardNotice>
      })}
    </Box>
  )
}

export default Board
