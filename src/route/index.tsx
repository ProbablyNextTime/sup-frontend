import * as React from "react"
import { Route, Switch } from "react-router-dom"
import DashBoard from "pages/DashBoard"
import SignIn from "pages/SignIn"
import { DashboardContextProvider } from "service/context/dashboardContext"
import NavigationBar from "pages/DashBoard/navbar"
import ThankYou from "../pages/Payment/ThankYou"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <>
      <Route component={NavigationBar} />
      <Switch>
        <Route exact path="/thank-you" component={ThankYou} />
        <Route exact path="/" component={SignIn} />
        <DashboardContextProvider>
          <Route exact path="/dashboard" component={DashBoard} />
        </DashboardContextProvider>
      </Switch>
    </>
  )
}

export default Routes
