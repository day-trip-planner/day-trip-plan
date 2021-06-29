import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <Link className="title" to='/'>The Day Tripper</Link>
                    <Link to='/auth'>Login</Link>
                    <Link to='/products'>Packages</Link>
                    <Link to='/cart'>Checkout</Link>
                    <Link to='/reviews'>Reviews</Link>
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
