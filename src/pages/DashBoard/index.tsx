import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"
import Board from "./board"
import { CardMedia } from "@material-ui/core"

const noticeSample = {
  picUrl: "https://via.placeholder.com/150",
  peopleTransfer: true,
  rating: 5,
  from: "Nikopol",
  to: "Kiev",
  desc: "your mother`s cock!",
  vehicleType: "Truck",
  noticeProvider: "Zalypa Inc.",
  maxAmount: 500,
}

interface IDashBoardProps {}

const noticesEx = [noticeSample, noticeSample, noticeSample]

const DashBoard = (props: IDashBoardProps) => {
  const [notices, setNotices] = React.useState(noticesEx)

  const classes = useStyles()
  return (
    <Box>
      <NavigationBar />
      <div className={classes.wrapper}>
        <Search />
        <Box className={classes.content}>
          <div className={classes.boardWrapper}>
            <Board notices={notices} />
          </div>
          <div className={classes.mapWrapper}>
            <img
              className={classes.map}
              src={"https://imagevars.gulfnews.com/2015/8/2/1_16a0819534c.1560245_2074896705_16a0819534c_large.jpg"}
            />
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default DashBoard
