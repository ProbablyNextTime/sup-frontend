import * as React from "react"
import { Box, Typography } from "@material-ui/core"
import useStyles from "./Styles/boardStyles"
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
        return <BoardNotice data={x} />
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
