import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Login</Link>
            <Link to='/products'>Packages</Link>
            <Link to='/cart'>Checkout</Link>
            <Link to='/reviews'>Reviews</Link>
        </header>
    )
}

export default Header