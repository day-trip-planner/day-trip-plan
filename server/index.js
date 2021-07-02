require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
const cors = require('cors')


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;



// Controllers
const authCtrl = require('./controllers/authCtrl');
const productsCtrl = require('./controllers/productsCtrl');
const cartCtrl = require('./controllers/cartCtrl');
const reviewsCtrl = require('./controllers/reviewsCtrl');

// APP Instance

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

app.use(cors())
app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})
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

//Reviews
app.get('/api/reviews', reviewsCtrl.getReview)
app.post('/api/reviews/:review_id', reviewsCtrl.addToReview)
app.delete('/api/reviews/:review_id', reviewsCtrl.deleteItemFromReview)
app.put('/api/reviews/:review_id', reviewsCtrl.editReview)