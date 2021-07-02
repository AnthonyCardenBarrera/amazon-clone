/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51J8VZqKlcn5xJvvZFXnzSzSLCOMKfX5YNUSX3G3zCmsx8Kigc8aJWbRk5lPKTz4PijiJoNnYqaWQToqK9StNT65b00BA1FAWXl");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received BOOM!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-bf295/us-central1/api
