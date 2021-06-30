import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Checkout() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Luxury Inns</h1>
      {showItem ? <StripeContainer/> : <>
      <button onClick={() => setShowItem(true)}>Complete Purchase</button></>}
    </div>
  );
}

export default Checkout;