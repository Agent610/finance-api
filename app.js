const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./scr/routes/authRoutes");
app.use("/auth", authRoutes);

const transactionRoutes = require("./scr/routes/transactionRoutes");
app.use("/transactions", transactionRoutes);

const summaryRoutes = require("./scr/routes/summaryRoutes");
app.use("/summary", summaryRoutes);

app.get("/", (req, res) => {
  res.send("Finance API running");
});

module.exports = app;
