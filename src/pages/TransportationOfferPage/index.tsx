import * as React from "react"
import useStyles from "./styles"
import { Box, Button, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import BoardNotice from "pages/DashBoard/BoardNotice"
import ITransportationOffer from "model/transportationOffer"
import { getTransportationOffer } from "service/api/transportationOffer"

interface ITransportationOfferProps {
  offer_id: ExtId
}

const TransportationOfferPage = ({ offer_id }: ITransportationOfferProps) => {
  const history = useHistory()
  const [newOffer, setNewOffer] = React.useState<ITransportationOffer>({} as ITransportationOffer)

  const getOffer = React.useCallback(async () => {
    const offer: ITransportationOffer = await getTransportationOffer(offer_id)
    console.log(offer)
    setNewOffer(offer)
  }, [offer_id])

  React.useEffect(() => {
    getOffer()
  }, [getOffer])

  const handleReturn = React.useCallback(() => history.push("/dashboard"), [history])

  const classes = useStyles()
  return (
    <>
      {" "}
      {newOffer.id && (
        <div className={classes.wrapper}>
          <Box className={classes.mainInfo}>
            <Typography className={classes.thankYouSign}>Thank you!</Typography>
            <Typography className={classes.subText}>
              Thank you for trusting us, your delivery will soon appear in dashboard.
            </Typography>
            <Typography className={classes.subText}>
              Meanwhile, you can check out other popular delivery options, or go back.
            </Typography>
            <Button className={classes.mainButton} variant="contained" color="primary" onClick={handleReturn}>
              Return
            </Button>
            <Box className={classes.interestingOffers}>
              <BoardNotice isSelectable={false} transportationOffer={newOffer} />
            </Box>
          </Box>
          <Box className={classes.sidePicture} />
        </div>
      )}
    </>
  )
}

export default TransportationOfferPage
