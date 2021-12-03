const express = require("express");

const ProductRouter = express.Router();
const {
  getAllProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  getCategories,
  getProductInCategory,
} = require("../controllers/Product");

ProductRouter.route("/").get(getAllProducts).post(addProduct);
// ProductRouter.route("/categories").get(getCategories);
ProductRouter.route("/categories/:category").get(getProductInCategory);
ProductRouter.route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = ProductRouter;
