const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./scr/routes/authRoutes");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Finance API running");
});

module.exports = app;
