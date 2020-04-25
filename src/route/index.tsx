import * as React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/Home"
import DashBoard from "../pages/DashBoard"
import ThankYou from "pages/Payment/ThankYou"
import { DashboardContextProvider } from "service/context/dashboardContext"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <DashboardContextProvider>
        <Route exact path="/dashboard" component={DashBoard} />
      </DashboardContextProvider>
      <Route path="/thank-you" component={ThankYou} />
    </Switch>
  )
}

export default Routes
