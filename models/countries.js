const { Schema, model } = require("mongoose");

const countrySchema = Schema({
  name: { type: String, required: true, trim: true },
  flag: String,
  holidays: [{ type: Schema.Types.ObjectId, ref: "Holiday" }],
});

const Country = model("Country", countrySchema);
module.exports = Country;

//* 1-1, 1-M (one to Many), M-N (Many to Many)
//* Customer - 1 - 1 - Address

// const customer = Schema({
//   address: { type: Schema.Types.ObjectId, ref: "Address" },
// });

// const address = Schema({
//   customer: { }
// })