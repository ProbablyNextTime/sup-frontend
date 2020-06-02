import * as React from "react"
import { Switch } from "react-router-dom"
import DashBoard from "pages/DashBoard"
import SignIn from "pages/SignIn"
import { DashboardContextProvider } from "service/dashboardContext/dashboardContext"
import { UserContextProvider } from "../service/userContext/userContext"
import NavigationBar from "pages/DashBoard/navbar"
import ThankYou from "pages/Payment/ThankYou"
import Route from "./Route"
import HomePage from "pages/Home"
import TransportationOfferPage from "pages/TransportationOfferPage"

const Routes = () => {
  return (
    <UserContextProvider>
      <Route component={NavigationBar} />
      <Switch>
        {/* public */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={SignIn} />
        {/* logged in */}
        <Route isPrivate exact path="/thank-you" component={ThankYou} />
        <Route
          isPrivate
          exact
          path="/offer/:offer_id"
          render={({ match: { params } }) => <TransportationOfferPage vacancy_id={params.offer_id} />}
        />
        <DashboardContextProvider>
          <Route isPrivate exact path="/dashboard" component={DashBoard} />
        </DashboardContextProvider>
      </Switch>
    </UserContextProvider>
  )
}

export default Routes
