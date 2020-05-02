import React, { useReducer } from "react"
import ITransportationOffer, { TransportationOfferStatus, PaymentStatus } from "model/transportationOffer"
import { transportation_provider } from "../../model/transportation_provider"

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
  additionalInfo: "default",
  departureDate: "default",
  arrivalDate: "default",
  cargo: {},
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
  } as transportation_provider,
  transportationTags: [],
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
