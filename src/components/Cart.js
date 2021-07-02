import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCart } from '../redux/cartReducer';
import Checkout from './Checkout'
import StripeContainer from './StripeContainer'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Cart = (props) => {
  const [showItem, setShowItem] = useState(false)
  const { cart } = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/cart')
      .then((res) => {
        console.log(res.data)
        dispatch(setCart(res.data))
      }).catch(err => {
        console.log(err)
        if (err.response.status === 511) {
          props.history.push('/auth')
        }
      })
  }, [])

  const handleDeleteFromCart = (product_id) => {
    axios.delete(`/api/cart/${product_id}`)
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

  const handleChangeQty = (product_id, quantity) => {
    if (quantity <= 0) {
      handleDeleteFromCart(product_id)
    } else {
      axios.put(`/api/cart/${product_id}`, { quantity })
        .then(res => {
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

  return (
    <div className="product-container">
      <div className="product-title"><h1 >Checkout</h1></div>
      <Link to='/checkout'>
        <div className="cart-icon-container">  <ShoppingCartIcon style={{ fontSize: 70, color: 'white' }} /></div>
      </Link>
      {cart.map((product) => {
        return (
          <div className="product-item" key={product.product_cart_id}>
            <div>{product.name}</div>
            <div>$ {product.price}</div>
            <img src={product.photo_one} />
            <img src={product.photo_two} />
            <h5>Qty: {product.quantity}</h5>
            <button onClick={() => handleChangeQty(product.product_id, product.quantity - 1)}>-</button>
            <button onClick={() => handleDeleteFromCart(product.product_id)}>X</button>
            <button onClick={() => handleChangeQty(product.product_id, product.quantity + 1)}>+</button>
          </div>
        )
      })}
    </div>
  )
}


export default Cart