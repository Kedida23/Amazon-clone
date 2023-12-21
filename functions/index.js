require("dotenv").config();
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE);

const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello");
});

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	try {
		console.log("Payment Request Recieved for this amount >>> ", total);
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error);
		response.status(500).send("server error");
	}
});

app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("listning");
	}
});
