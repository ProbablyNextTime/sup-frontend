import * as React from "react"
import useStyles from "./styles"
import { Box, Button, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import BoardNotice from "pages/DashBoard/BoardNotice"
import { getTransportationOffers } from "service/api/transportationOffer"
import ITransportationOffer from "model/transportationOffer"

const ThankYou = () => {
  const history = useHistory()
  const [interestingOffers, setInterestingOffers] = React.useState<ITransportationOffer[]>([])

  React.useEffect(() => {
    const getInterestingOffers = async (): Promise<void> => {
      const newNotices = await getTransportationOffers(1, 2, "")
      setInterestingOffers(newNotices)
    }

    getInterestingOffers()
  }, [])

  const handleReturn = React.useCallback(() => history.push("/dashboard"), [history])

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Box className={classes.mainInfo}>
        <Typography className={classes.thankYouSign}>Thank you!</Typography>
        <Typography className={classes.subText}>
          Thank you for trusting us, your delivery will soon appear in your profile dashboard.
        </Typography>
        <Typography className={classes.subText}>
          Meanwhile, you can check out other popular delivery options, or go back.
        </Typography>
        <Button
          className={classes.mainButton}
          variant="contained"
          color="primary"
          data-cy={"thank-you-return"}
          onClick={handleReturn}
        >
          Return
        </Button>
        <Box className={classes.interestingOffers}>
          {interestingOffers.map((offer: ITransportationOffer, key: number) => {
            return <BoardNotice isDashboardNotice={false} key={key} transportationOffer={offer} />
          })}
        </Box>
      </Box>
      <Box className={classes.sidePicture} />
    </div>
  )
}

export default ThankYou
