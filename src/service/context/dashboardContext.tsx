import React, { useReducer } from "react"
import ITransportationOffer, { TransportationOfferStatus, PaymentStatus } from "model/transportationOffer"

/* Context that stores the globally present state of the dashboard.
 *
 * Allows to avoid passing multiple props down the component tree
 *
 *  @example
 * const dashboardContext = React.useContext(DashboardContext)
 * dashboardCcontext.handleSettingOffer({transportationOffer: offer})
 */

export interface IDashboardContext {
  transportationOffer: ITransportationOffer
  handleSettingOffer: (transportationOffer: IDashboardState) => void
}

export interface IDashboardState {
  transportationOffer?: ITransportationOffer
}

const initialOffer: ITransportationOffer = {
  id: "",
  createdAt: "",
  status: TransportationOfferStatus.opened,
  title: "",
  transportationProvider: "",
  paymentStatus: PaymentStatus.not_paid,
  depositValueInUsd: 0,
  pricePerUnitInUsd: 0,
}

const initialDashboard: IDashboardContext = {
  transportationOffer: initialOffer,
  handleSettingOffer: (transportationOffer: IDashboardState) => {
    throw new Error("Method not implemented.")
  },
}

const reducer = (state: IDashboardContext, action: any) => {
  switch (action.type) {
    case "handleSettingOffer":
      return {
        ...state,
        transportationOffer: action.payload.transportationOffer,
      }
    default:
      return state
  }
}

const DashboardContext: React.Context<IDashboardContext> = React.createContext(initialDashboard)

const DashboardContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialDashboard)

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        handleSettingOffer: (transportationOffer: IDashboardState) => {
          dispatch({ type: "handleSettingOffer", payload: transportationOffer })
        },
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}

export { DashboardContextProvider, DashboardContext }
