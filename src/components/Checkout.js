import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Checkout() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Check out</h1>
      <button onClick={() => setShowItem(true)}>Purchase item</button>
      {showItem ? <StripeContainer/> : null}

    </div>
  );
}

export default Checkout;