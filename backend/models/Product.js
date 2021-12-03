const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  review: {
    type: [ReviewSchema],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
