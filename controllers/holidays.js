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

router.post("/", async (req, res) => {
  console.log("body", req.body);
  const holiday = await Holiday.create({ name: req.body.title });

  res.json(holiday);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const holiday = await Holiday.findById(id);
  res.json(holiday);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const holiday = await Holiday.findByIdAndUpdate(id, req.body);
  res.json(holiday);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Holiday.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
