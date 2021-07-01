import React, { useState } from 'react'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import { setUser } from '../redux/authReducer'
import { setCart } from '../redux/cartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

function Navbar(props) {

    const [showLinks, setShowLinks] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const { user } = useSelector(state => state.auth)

    const handleLogout = () => {
        axios.delete('/auth/logout')
            .then((res) => {
                console.log('user logged out')
                dispatch(setUser(null))
                dispatch(setCart([]))
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link className="title" to='/'>Luxury Inns</Link>
                    {!user ? <Link to='/auth'>Login</Link> : null}
                    <Link to='/products'>Locations</Link>
                    <Link to='/cart'>Cart</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to ='/checkout'>Checkout</Link>
                    {user ? <Link to='/' onClick={handleLogout}>Logout</Link> : null}

                </div>
                <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon /> </button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..." />
                <button><SearchIcon /></button>
            </div>

        </div>
    )
}

export default Navbar
