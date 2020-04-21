import * as React from "react"
import { initiateTransportationOfferCheckout } from "service/billing"
import { useStripe } from "@stripe/react-stripe-js"
import { useAPICallback } from "hooks/useApiCallback"

export enum BillType {
  transportation_offer = "transportation_offer",
}

interface IPaymentProps {
  billType: BillType
  id?: ExtId
}

export const usePayment = (billType: BillType, id: ExtId) => {
  const [sessionId, setSessionId] = React.useState<string>()
  const stripe = useStripe()
  const initiate = React.useCallback(async () => {
    switch (billType) {
      case BillType.transportation_offer:
        if (!id) throw new Error("Missing vacancy ID")

        const res = await initiateTransportationOfferCheckout(id)
        setSessionId(res.session_id)
        break

      default:
        throw new Error(`Unknown bill type ${billType}`)
    }
  }, [billType, id])

  React.useEffect(() => {
    initiate()
  }, [initiate])

  const handlePay = useAPICallback(async () => {
    sessionId &&
      stripe &&
      (await stripe.redirectToCheckout({
        sessionId,
      }))
  }, [sessionId, stripe])

  return handlePay
}
