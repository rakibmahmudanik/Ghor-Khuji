const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema({
  image: String, // File path or URL
  title: { type: String, minlength: 10, maxlength: 50, required: true },
  address: { type: String, required: true },
  description: { type: String, maxlength: 500 },
  houseNo: String,
  roadNo: String,
  flatNo: String,
  price: { type: Number, required: true, min: 1 },
  bedrooms: Number,
  bathrooms: Number,
  areaSize: Number,
  ownerName: { type: String, required: true }, // New Field
  contactNumber: { type: String, required: true }, // New Field
  createdAt: { type: Date, default: Date.now },
});

const Flat = mongoose.model("Flat", flatSchema);

module.exports = Flat;
