import * as React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import OfferPayment from "pages/Payment/demo_payment"
import ThankYou from "pages/Payment/thankYou"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route
        path="/demo_payment"
        render={() => <OfferPayment transportation_offer_id={"53a2874c-040b-421b-ad3f-c75dcf4bb5b9"} />}
      />
      <Route path="/thank-you" component={ThankYou} />
    </Switch>
  )
}

export default Routes
