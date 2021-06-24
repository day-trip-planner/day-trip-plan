import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const  PUBLIC_KEY = 'pk_test_51J5XqEEBwtcHnvdzRTtHyCcWpqQWDNSpTM4WjPlBRVvXD4GmtVE7smKaLDd0Sj4LtxwQbe9LgCqEMIykBABK8wqf00USgKLjPU'

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer (){
    return(
        <Elements stripe={stripeTestPromise}>
            <Checkout />
        </Elements>
    )
}