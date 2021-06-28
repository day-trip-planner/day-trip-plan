import { useState } from 'react';
import StripeContainer from './StripeContainer';

function Checkout() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {/* {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src={spatula} alt="Spaluta" />
      <button onClick={() => setShowItem(true)}>Purchase Spatula</button></>} */}
    </div>
  );
}

export default Checkout;