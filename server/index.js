require('dotenv').config();
const express = ('express');
const massive = ('massive');
const session = ('express-session');


const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

// Controllers
const authCtrl = require('./controllers/authController');
const productsCtrl = require('./controllers/productsController');
const cartCtrl = require('./controllers/cartController');

// APP Instance

const app =  express();

// Top Level Middleware
app.use(express.json())
// Sessions & cookies
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 6000 * 60 * 60 * 24 * 7 }
    })
)

// Database connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then( db => {
    app.set('db', db)
    console.log('POWER OVERWHELMING')
    app.listen(SERVER_PORT, () => console.log
    (`Power coming through on port ${SERVER_PORT}`))
}).catch(err => console.log(err))


// End points