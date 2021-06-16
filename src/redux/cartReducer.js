// initial state
const initialState = {
    cart: []
  }
  // action types
  const SET_CART = "SET_CART"
  // action builders
  export function setCart(cart){
    console.log(cart, 'this is the cart from redux')
    return {
      type: SET_CART,
      payload: cart
    }
  }
  // reducer
  export default function cartReducer(state = initialState, action){
    console.log(action.payload)
    switch(action.type){
      case SET_CART:
        return {...state, cart: action.payload}
      default:
        return {...state}
    }
  }
  