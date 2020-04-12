import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/indexStyles"
import NavigationBar from "./navbar"
import Search from "./search"
import Board from "./board"
import { IBoardNotice } from "../../model/notice"

const noticeSample: IBoardNotice = {
  picUrl:
    "https://images.unsplash.com/photo-1526648611824-1e1ee4a4de99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80",
  peopleTransfer: true,
  rating: 5,
  from: "The Cock Tavern",
  to: "Ass wood",
  desc: "your mother`s cock!",
  vehicleType: "Truck",
  noticeProvider: "Zalypa Inc.",
  maxAmount: 500,
  tags: ["cocksucker", "horny level", "your dad inside"],
  numberOfReviews: 47,
  estimatedPrice: 300,
}

interface IDashBoardProps {}

const noticesEx: Array<IBoardNotice> = [noticeSample, noticeSample, noticeSample]

const DashBoard = (props: IDashBoardProps) => {
  const [notices, setNotices] = React.useState([noticeSample])

  React.useEffect(() => {
    setNotices(noticesEx)
  }, [])

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
              alt={"map"}
            />
            <hr />
            <hr />
            <hr />
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default DashBoard
