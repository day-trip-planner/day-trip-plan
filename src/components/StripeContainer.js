 
import { FormatTextdirectionLToR } from "@material-ui/icons"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51J5XqEEBwtcHnvdzRTtHyCcWpqQWDNSpTM4WjPlBRVvXD4GmtVE7smKaLDd0Sj4LtxwQbe9LgCqEMIykBABK8wqf00USgKLjPU"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}