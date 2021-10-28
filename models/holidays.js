const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
  celebrated: { type: Boolean, default: false},
  description: String,
  likes: { type: Number, min: 0 },
  tags: [String],
  name: { type: String, required: true }
})

const Holiday = mongoose.model("Holiday", holidaySchema);

module.exports = Holiday;