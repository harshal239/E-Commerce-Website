const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 0;
    const sort = req.query.sort === "desc" ? -1 : 1;

    const products = await Product.find().limit(limit).sort({ name: sort });
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, image, description, category, price, quantity, review } =
      req.body;
    const product = await Product.create({
      name,
      image,
      description,
      category,
      price,
      quantity,
      review,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).json({ Message: "Product Not Found" });
    }
    res.status(201).json(deletedProduct);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ Message: "Product Not Found" });
    }
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Product.aggregate().group({
      _id: "$category",
      count: { $sum: 1 },
    });
    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProductInCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getCategories,
  getProductInCategory,
};
