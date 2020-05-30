import * as React from "react"
import MainInfo from "./MainInfo"
import AdditionalInfo from "./AdditionalInfo/Index"
import Details from "./Details"
import AdditionalDetails from "./AdditionalDetails"
import OrderSummary from "./OrderSummary"

interface IDashBoardProps {
  displayMapIcon: boolean
  width: number
  setShowOfferList: React.Dispatch<React.SetStateAction<boolean>>
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardNoticeInfo = ({ width, displayMapIcon, setShowMap, setShowOfferList }: IDashBoardProps) => {
  return (
    <>
      <MainInfo
        width={width}
        setShowOfferList={setShowOfferList}
        displayMapIcon={displayMapIcon}
        setShowMap={setShowMap}
      />
      <AdditionalInfo />
      <Details />
      <AdditionalDetails />
      <OrderSummary />
    </>
  )
}

export default DashboardNoticeInfo
