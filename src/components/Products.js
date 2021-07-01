import { useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {setCart} from '../redux/cartReducer'
import Reviews from './Reviews'

const Products = (props) => {  
    const [products, setProducts] = useState([])
    const {user} = useSelector((store) => store.auth)
    const {cart} = useSelector((store) => store.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/api/products')
        .then((res) => {
            setProducts(res.data) 
        })
        .catch(err => console.log(err + ' Products.js 18'))
    }, [])

    const handleAddToCart = (product_id) => {
        const product = cart.find((product) => product.product_id === product_id)

        if(!product){
            axios.post(`/api/cart/${product_id}`)
            .then((res) => {
                dispatch(setCart(res.data))
            })
            .catch((err) => {
                if(err.response.status === 511){
                    props.history.push('/auth')
                }
            })
        }
        else{
            axios.post(`/api/cart/${product_id}`, {quantity: product.quantity + 1})
            .then((res) => {
                dispatch(setCart(res.data))
            })
            .catch(err => {
                console.log(err)
                if(err.response.status === 511){
                    props.history.push('/auth')
                }
            })
        }
    }

    console.log(products)
    return(
        <div>
            <h1>This is the products page</h1>
            {products.map((product) => {
                return(
                    <div key={product.product_id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <img src={product.photo_one}/>
                        <img src={product.photo_two}/>
                        <div>{product.description}</div>
                        <Reviews/>
                        {user &&
                        <button onClick={() =>
                        handleAddToCart(product.product_id)}>Add To Cart</button>}
                    </div>
                )
            })}

            <Link to='/cart'>View Cart</Link>
        </div>
    )
}

export default Products