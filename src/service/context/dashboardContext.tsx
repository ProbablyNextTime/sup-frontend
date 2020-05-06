import React, { useReducer } from "react"
import ITransportationOffer, { TransportationOfferStatus, PaymentStatus } from "model/transportationOffer"
import { transportationProvider } from "../../model/transportationProvider"

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
  query: string
  handleSettingOffer: (transportationOffer: IDashboardState) => void
  handleSettingQuery: (query: string) => void
}

export interface IDashboardState {
  transportationOffer?: ITransportationOffer
}

const initialOffer: ITransportationOffer = {
  additionalInfo: "default",
  departureDate: "default",
  arrivalDate: "default",
  cargo: {
    id: "ExtId",
  },
  deliveryPlace: "default",
  departurePoint: "default",
  depositValueInUsd: 0,
  destinationPoint: "default",
  id: "null",
  paymentStatus: PaymentStatus.not_paid,
  pickupPlace: "default",
  pricePerValueInUsd: 0,
  createdAt: "never",
  pricePerUnitInUsd: 0,
  status: TransportationOfferStatus.opened,
  title: "default",
  transferNumber: "default",
  isPremium: false,
  transportationProvider: {
    reviewsReceived: [],
    additional_details: ["asdasdasdas", "sdasdasdasdasd", "sdadasdasdasdasd"],
    id: "null",
    name: "name",
  } as transportationProvider,
  transportationTags: [],
}

const initialDashboard: IDashboardContext = {
  transportationOffer: initialOffer,
  query: "",
  handleSettingOffer: (transportationOffer: IDashboardState) => {
    throw new Error("Method not implemented.")
  },
  handleSettingQuery: (query: string) => {
    throw new Error("ff")
  },
}

const reducer = (state: IDashboardContext, action: any) => {
  switch (action.type) {
    case "handleSettingOffer":
      return {
        ...state,
        transportationOffer: action.payload.transportationOffer,
      }
    case "handleSettingQuery":
      return {
        ...state,
        query: action.payload.query,
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
        handleSettingQuery: (query: string) => {
          dispatch({ type: "handleSettingQuery", payload: query })
        },
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  )
}

export { DashboardContextProvider, DashboardContext }
