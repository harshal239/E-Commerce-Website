const Order = require("../models/Order");

const addOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.userid,
      req.body,
      { new: true }
    );
    if (!updatedOrder) {
      res.status(404).json({ Message: "Order Not Found" });
    }
    res.status(201).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      res.status(404).json({ Message: "Order Not Found" });
    }
    res.status(201).json(deleteOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrderByUserId = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userid });
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(201).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllOrders,
  getOrderByUserId,
  deleteOrder,
  updateOrder,
  addOrder,
};
