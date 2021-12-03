const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        name: {
          type: String,
        },
        image: {
          type: String,
        },
        description: {
          type: String,
        },
        category: {
          type: String,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    bill: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
