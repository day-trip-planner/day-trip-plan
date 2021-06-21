import { useState } from 'react'
import axios from 'axios'
import { setUser } from '../redux/authReducer'
import { setCart } from '../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Checkout = (props) => {
    return(
        <h1>This is the checkout page page</h1>
    )
}

export default Checkout