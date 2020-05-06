import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./indexStyles"
import MainInfo from "./MainInfo"
import AdditionalInfo from "./AdditionalInfo/Index"
import Details from "./Details"
import AdditionalDetails from "./AdditionalDetails"
import OrderSummary from "./OrderSummary"

interface IDashBoardProps {}

const DashboardNoticeInfo = (props: IDashBoardProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.boardNoticeInfoWrapper}>
      <MainInfo />
      <AdditionalInfo />
      <Details />
      <AdditionalDetails />
      <OrderSummary />
    </Box>
  )
}

export default DashboardNoticeInfo
