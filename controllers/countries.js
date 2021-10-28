const express = require("express");
const router = express.Router();
const Country = require("../models/countries");
const Holiday = require("../models/holidays");

router.get("/seed", async (req, res) => {
  await Country.deleteMany({});

  const holidays = await Holiday.find();
  const country = new Country({ name: "Singapore" });
  country.holidays = holidays;
  await country.save();

  res.send(country);
});

module.exports = router;
