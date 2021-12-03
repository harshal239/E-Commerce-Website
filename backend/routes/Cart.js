const express = require("express");

const CartRouter = express.Router();

const {
  getAllCarts,
  getCartByUserId,
  addCart,
  deleteCart,
  editCart,
  getCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../controllers/Cart");

CartRouter.route("/").get(getAllCarts).post(addCart);

CartRouter.route("/:userid")
  .get(getCartItems)
  .post(addCartItem)
  .put(updateCartItem);

CartRouter.delete("/:userid/:productId", deleteCartItem);

module.exports = CartRouter;
