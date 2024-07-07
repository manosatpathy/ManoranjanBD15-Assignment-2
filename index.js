const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Stock portfolio analysis API!");
});

// Endpoint 1
app.get("/calculate-returns", (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseInt(req.query.quantity);
  const totalReturnValue = (marketPrice - boughtAt) * quantity;
  res.send(totalReturnValue.toString());
});

// Endpoint 2
app.get("/total-returns", (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

// Endpoint 3
app.get("/calculate-return-percentage", (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);
  const returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

// Endpoint 4
app.get("/total-return-percentage", (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);
  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

// Endpoint 5
app.get("/status", (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage < 0) {
    res.send("Loss");
  } else {
    res.send("profit");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
