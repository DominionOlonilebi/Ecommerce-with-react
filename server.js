// sk_test_51OdRFKIdhXNqxJII26XY41K59rWYqcqJm3PJnovf6vS5RmPVf4g5B9XkqsT4dfHFPMeRAWp7GNjPQXudv62I8JWy00dIn6G1Wc
// solar: price_1OdRTzIdhXNqxJIIz5ZoQ5II
// solar panel: price_1OdRWTIdhXNqxJII97PuQDix
// Battery: price_1OdRZBIdhXNqxJIIrKmVzdlY
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51OdRFKIdhXNqxJII26XY41K59rWYqcqJm3PJnovf6vS5RmPVf4g5B9XkqsT4dfHFPMeRAWp7GNjPQXudv62I8JWy00dIn6G1Wc')

const app= express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) =>{

    console.log(req.body);
const items = req.body.items;
items.forEach((item) => {
    assistiveListeningSystems.push(
        {
            price: item.id,
quantity: item.quantity
        }
    )
});

const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
});

res.send(JSON.stringify({
    url: session.url
}));
});