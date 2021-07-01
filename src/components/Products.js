import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCart } from '../redux/cartReducer'
import Reviews from './Reviews'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Products = (props) => {
    const [products, setProducts] = useState([])
    const { user } = useSelector((store) => store.auth)
    const { cart } = useSelector((store) => store.cartReducer)
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

        if (!product) {
            axios.post(`/api/cart/${product_id}`)
                .then((res) => {
                    dispatch(setCart(res.data))
                })
                .catch((err) => {
                    if (err.response.status === 511) {
                        props.history.push('/auth')
                    }
                })
        }
        else {
            axios.post(`/api/cart/${product_id}`, { quantity: product.quantity + 1 })
                .then((res) => {
                    dispatch(setCart(res.data))
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 511) {
                        props.history.push('/auth')
                    }
                })
        }
    }

    console.log(products)
    return (
        <div className="product-container">
            <div className="product-title"> <h1>Locations</h1></div>
            {products.map((product) => {
                return (
                    <div className="product-item" key={product.product_id}>
                        <div>{product.name}</div>
                        <div>$ {product.price}</div>
                        <div className="product-img-container">
                            <img src={product.photo_one} />
                            <img src={product.photo_two} />
                        </div>
                        <div>{product.description}</div>
                        <Reviews />
                        {user &&
                            <button onClick={() =>
                                handleAddToCart(product.product_id)}>Add To Cart</button>}
                    </div>
                )
            })}

            <Link to='/cart'>
                <div className="cart-icon-container">  <ShoppingCartIcon style={{ fontSize: 70, color: 'white' }} /></div>
            </Link>

        </div>
    )
}

export default Products