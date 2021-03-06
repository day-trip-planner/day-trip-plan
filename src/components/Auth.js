// Auth Js
import { useState } from 'react'
import axios from 'axios'
import { setUser } from '../redux/authReducer'
import { setCart } from '../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Auth = (props) => {
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleRegister = () => {
        axios.post('/auth/register', { email, password })
            .then((res) => {
                dispatch(setUser(res.data))
                axios.get('/api/cart').then((response) => {
                    dispatch(setCart(response.data))
                    props.history.push('/products')
                })
            })
            .catch(err => console.log("This fired"))
    }
    const handleLogin = () => {
        axios.post('/auth/login', { email, password })
            .then((res) => {
                console.log(res.data)
                dispatch(setUser(res.data))
                axios.get('/api/cart').then((response) => {
                    dispatch(setCart(response.data))
                    props.history.push('/products')
                })
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="logContainer">
            <h1>Login/Register</h1>
            <h5>Username</h5>
            <input value={email} onChange={(e) => setUsername(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}

export default Auth