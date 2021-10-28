const express = require("express");
const router = express.Router();
const Holiday = require("../models/holidays");

router.get("/seed", async (req, res) => {
  await Holiday.deleteMany({});

  const holiday = new Holiday({ name: "deepavali" });
  await holiday.save();

  res.send(holiday);
});

module.exports = router;
