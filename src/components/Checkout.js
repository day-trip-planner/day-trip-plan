import React from 'react'
import { CardElement, useelement, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import axios from 'axios'

import { setUser } from '../redux/authReducer'
import { setCart } from '../redux/cartReducer'
import { useDispatch } from 'react-redux'
import { object } from 'prop-types'

export default function Checkout() {
    const [ success, setSuccess ] = usestate(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentmethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })
    

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:3000/payment', {
                amount: 1000,
                id
            })

            if(response.data/success) {
                console.log('Successful payment')
                setSuccess(true)
            }
        } catch (error) {
            console.log.log('Error', error)
        }
    } else {
        console.log(error.message)
    }
}
    return(
        <>
    {!success ? 
    <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
        <div className='FormRow'>
            <CardElement options={CARD_OPTIONS} />
            </div>  
        </fieldset>
        <button>Pay</button>
    </form>
:
<div>
    <h2>You just bought a package</h2>
</div>
}
        </>
    )
}