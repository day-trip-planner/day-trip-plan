import { Link } from "react-router-dom"
import Cars from './Cars'

const Products = () => {  

    return(
        <div>
            <h1>This is the products page</h1>
            <Cars />
            <Link to='/hotels'>Hotel Rentals</Link>
            <Link to='/flights'>Flights</Link>
            <Link to='/cars'>Car Rentals</Link>
        </div>
    )
}

export default Products