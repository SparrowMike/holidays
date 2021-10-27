const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const port = process.env.PORT ?? 2001;

app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("/", (req, res) => {
//   res.send("hello there");
// });

app.listen(port, (req, res) => {
  console.log("Hi there from port, ", port);
});
