//* Dependecies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const holidaysController = require("./controllers/holidays");

//* Config
const app = express();
const port = process.env.PORT ?? 2001;
const MONGODB_URI =
  process.env.MONGODB_URI ?? "mongodb://localhost:27017/holidays";
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose..." + MONGODB_URI);
});

//* Middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/holidays", holidaysController);

//* Routes
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({ name: "simon", feelings: "happy" });
});

//* Start server to listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
