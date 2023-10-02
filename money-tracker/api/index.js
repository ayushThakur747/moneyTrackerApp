const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Transaction = require("./models/transaction.js");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ body: "test okk" });
});

app.post("/api/transaction", async (req, res) => {
  try {
    console.log({ body: req.body, mongo: process.env.MONGO_URL });
    await mongoose.connect(process.env.MONGO_URL);
    const { name, description, datetime, price } = req.body;

    const transaction = await Transaction.create({
      price,
      name,
      description,
      datetime,
    });
    console.log(transaction);
    res.json({ body: transaction });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4400);
