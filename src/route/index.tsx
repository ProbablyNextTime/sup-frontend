import * as React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/Home"
import DashBoard from "../pages/DashBoard"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
  )
}

export default Routes
