import * as React from "react"
import { Box, Slide, IconButton } from "@material-ui/core"
import { KeyboardArrowLeft } from "@material-ui/icons"
import useStyles from "./Styles/indexStyles"
import Search from "./search"
import Board from "./board"
import DashboardNoticeInfo from "./DashboardNoticeInfo"
import ITransportationOffer from "model/transportationOffer"
import useWindowDimensions from "hooks/useWindowDimensions"

const DashBoard = () => {
  const [transportationOffers, setTransportationOffers] = React.useState([] as ITransportationOffer[])
  const classes = useStyles()
  const [showMap, setShowMap] = React.useState<boolean>(true)
  const { width } = useWindowDimensions()
  const [displayMapIcon, setDisplayMapIcon] = React.useState<boolean>(false)
  const [displayOffersList, setDisplayOffersList] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (width < 1300) {
      setShowMap(false)
      setDisplayMapIcon(true)
    } else {
      setShowMap(true)
      setDisplayMapIcon(false)
    }
  }, [width])

  return (
    <Box className={classes.wrapper}>
      <Search width={width} setTransportationOffers={setTransportationOffers} />
      <Box className={classes.content}>
        <Slide direction="left" in={displayOffersList || width > 850} mountOnEnter unmountOnExit>
          <Box className={classes.boardWrapper} onClick={() => setDisplayOffersList(false)}>
            <Board transportationOffers={transportationOffers} setTransportationOffers={setTransportationOffers} />
          </Box>
        </Slide>
        <Slide
          direction="left"
          in={(!showMap && !displayOffersList) || (width > 850 && !showMap) || width > 1300}
          mountOnEnter
          unmountOnExit
        >
          <Box className={classes.boardNoticeInfoWrapper}>
            <DashboardNoticeInfo
              width={width}
              setShowOfferList={setDisplayOffersList}
              setShowMap={setShowMap}
              displayMapIcon={displayMapIcon}
            />
          </Box>
        </Slide>
        <Slide direction="left" in={showMap} mountOnEnter unmountOnExit>
          <Box className={classes.mapWrapper}>
            <img
              className={classes.map}
              src={"https://imagevars.gulfnews.com/2015/8/2/1_16a0819534c.1560245_2074896705_16a0819534c_large.jpg"}
              alt={"map"}
            />
            {width < 1300 && (
              <IconButton className={classes.backArrow} onClick={() => setShowMap(false)}>
                <KeyboardArrowLeft />
              </IconButton>
            )}
          </Box>
        </Slide>
      </Box>
    </Box>
  )
}

export default DashBoard
