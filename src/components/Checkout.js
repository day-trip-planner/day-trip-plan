import { useState } from 'react';
import StripeContainer from './StripeContainer';
// import './app'

function Checkout(props) {
  const [showItem, setShowItem] = useState(false)
  const buttonHandle = () => {
    setShowItem(true)
    props.history.push('/cart')
  }
  
  
  return (
    <div className="payment-form">
      <h1>Complete Payment Form</h1>
      {/* <button onClick={buttonHandle}> CLICK ME </button> */}
      {showItem ? <StripeContainer/> : <> <h3></h3>
      <button onClick={() => setShowItem(true)}>Complete Purchase</button></>}
    </div>
  );
}

export default Checkout;

