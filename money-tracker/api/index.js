const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ body: "test okk" });
});

app.post("/api/transaction", (req, res) => {
  console.log({ body: req.body });
  res.json({ body: req.body });
});

app.listen(4400);
