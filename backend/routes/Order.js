const express = require("express");

const OrderRouter = express.Router();

const {
  getAllOrders,
  getOrderByUserId,
  deleteOrder,
  updateOrder,
  addOrder,
} = require("../controllers/Order");

OrderRouter.route("/").get(getAllOrders).post(addOrder);

OrderRouter.route("/:userid")
  .get(getOrderByUserId)
  .patch(deleteOrder)
  .delete(updateOrder);

module.exports = OrderRouter;
