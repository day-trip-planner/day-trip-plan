import { Switch, Route } from "react-router-dom";
import Auth  from './components/Auth';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Products from './components/Products'
import Checkout from "./components/Checkout";

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/reviews' component={Reviews} />
        <Route exact path='/checkout' component={Checkout} />
    </Switch>
)
