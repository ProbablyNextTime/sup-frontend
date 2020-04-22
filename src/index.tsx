import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = process.env.REACT_APP_STRIPE_KEY_PUBLISHABLE
  ? loadStripe(process.env.REACT_APP_STRIPE_KEY_PUBLISHABLE)
  : Promise.reject("REACT_APP_STRIPE_KEY_PUBLISHABLE not set")

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
