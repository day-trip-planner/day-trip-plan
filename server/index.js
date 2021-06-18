require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

// Controllers
const authCtrl = require('./controllers/authCtrl');
const productsCtrl = require('./controllers/productsCtrl');
const cartCtrl = require('./controllers/cartCtrl');
const cartController = require('./controllers/cartCtrl');

// APP Instance

const app = express();

// Top Level Middleware
app.use(express.json())
// Sessions & cookies
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 6000 * 60 * 60 * 24 * 7 }
    })
)

// Database connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db)
    console.log('POWER OVERWHELMING')
    app.listen(SERVER_PORT, () => console.log
        (`Power coming through on port ${SERVER_PORT}`))
}).catch(err => console.log(err))


// End points
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);
app.get('/auth/getUser', authCtrl.getUser);

// Products
app.get('/api/products', productsCtrl.getProducts);

// Cart
app.get('/api/cart', cartCtrl.getCart);
app.post('/api/cart/:product_id', cartCtrl.addToCart);
app.delete('/api/cart/:product_id', cartCtrl.deleteItemFromCart);
app.put('/api/cart/:product_id', cartCtrl.changeCartQty)