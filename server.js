const express = require("express");
const app = express();
const port = 2001;

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen(port, (req, res) => {
  console.log("Hi there from port, ", port);
});
