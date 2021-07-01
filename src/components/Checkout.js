import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Checkout() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      {showItem ? <StripeContainer/> : <> <h3></h3>
      <button onClick={() => setShowItem(true)}>Complete Purchase</button></>}
    </div>
  );
}

export default Checkout;