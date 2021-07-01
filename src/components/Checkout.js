import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Checkout(props) {
  const [showItem, setShowItem] = useState(false)
  const buttonHandle = () => {
    setShowItem(true)
    props.history.push('/cart')
  }
  
  
  return (
    <div className="App">
      <button onClick={buttonHandle}> CLICK ME </button>
      {showItem ? <StripeContainer/> : <> <h3></h3>
      <button onClick={() => setShowItem(true)}>Complete Purchase</button></>}
    </div>
  );
}

export default Checkout;

