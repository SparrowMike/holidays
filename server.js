//* Dependecies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const holidaysController = require("./controllers/holidays");
const countriesController = require("./controllers/countries");
require("dotenv").config();

//* Config
const app = express();
const port = process.env.PORT ?? 4000;
const MONGODB_URI =
  process.env.MONGODB_URI ?? "mongodb://localhost:27017/holidays";
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

//* Middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use("/api/holidays", holidaysController);
app.use("/api/countries", countriesController);

//* Routes
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({ name: "simon", feelings: "happy" });
});

//* Start server to listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
