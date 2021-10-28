const express = require("express");
const router = express.Router();
const Holiday = require("../models/holidays");

router.get("/seed", async (req, res) => {
  await Holiday.deleteMany({});

  const deepavali = new Holiday({ name: "Deepavali" });
  await deepavali.save();

  const christmas = new Holiday({ name: "Christmas" });
  await christmas.save();

  res.send([deepavali, christmas]);
});

//* 5 + 2  REST routes => CREATE, ALL, READ1, UPDATE, DELETE (NEW Form, Edit Form)

router.get("/", async (req, res) => {
  const holidays = await Holiday.find();
  res.json(holidays);
});

module.exports = router;
