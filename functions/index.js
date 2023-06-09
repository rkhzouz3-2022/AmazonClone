const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `sk_test_51NFO7SKAhCobj7z7d8NmuhYfzs61REB6ngTqS25SGOhNGP4xwOaiZlXdQbrebCyrnMAUFKFP4cl7FytZubXUDXi700o9XPJFpO`
  );

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("what's up world"));

app.post("/payments/create", async (request, response) => {
  console.log("Payment Request Received for this Amount: ", total);
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
