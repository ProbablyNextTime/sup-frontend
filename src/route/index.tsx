import * as React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import ThankYou from "pages/Payment/ThankYou"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route path="/thank-you" component={ThankYou} />
    </Switch>
  )
}

export default Routes
