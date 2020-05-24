import * as React from "react"
import { isLoggedIn } from "@jetkit/react"
import { Redirect } from "react-router-dom"

const HomePage = () => {
  if (isLoggedIn()) {
    return <Redirect to="/dashboard" />
  }
  return <Redirect to="/login" />
}

export default HomePage
