const mongoose = require("mongoose");

const CartItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const OrderSchema = mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  cartItems: {
    type: [CartItemSchema],
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Shipped", "Delivered"],
  },
});

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [20, "Name cannot be greater than 20 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      maxlength: [15, "Username cannot be greater than 15 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    order: {
      type: [OrderSchema],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", UserSchema);
