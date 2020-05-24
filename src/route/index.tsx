import * as React from "react"
import { Route, Switch } from "react-router-dom"
import DashBoard from "pages/DashBoard"
import SignIn from "pages/SignIn"
import { DashboardContextProvider } from "service/dashboardContext/dashboardContext"
import { UserContextProvider } from "../service/userContext/userContext"
import NavigationBar from "pages/DashBoard/navbar"
import ThankYou from "pages/Payment/ThankYou"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <UserContextProvider>
      <Route component={NavigationBar} />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/thank-you" component={ThankYou} />
        <DashboardContextProvider>
          <Route exact path="/dashboard" component={DashBoard} />
        </DashboardContextProvider>
      </Switch>
    </UserContextProvider>
  )
}

export default Routes
