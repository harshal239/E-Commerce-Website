const Cart = require("../models/Cart");
const Product = require("../models/Product");

const getAllCarts = async (req, res) => {
  try {
    const allCarts = await Cart.find();

    res.status(201).json(allCarts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCartByUserId = async (req, res) => {
  const userId = req.params.userid;

  try {
    const userCart = await Cart.find({ id: userId });
    res.status(201).json(userCart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const editCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.userid,
      req.body,
      { new: true }
    );

    if (!updatedCart) {
      res.status(404).json({ Message: "Cart Not Found !" });
    }

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findOneAndDelete({
      userId: req.params.userid,
    });

    if (!updatedCart) {
      res.status(404).json({ Message: "Cart Not Found !" });
    }
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//------------------------------------------------------

const getCartItems = async (req, res) => {
  const userId = req.params.userid;

  try {
    let cart = await Cart.findOne({ userId });
    if (cart && cart.products.length > 0) {
      res.status(201).json(cart);
    } else {
      res.status(201).json(null);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addCartItem = async (req, res) => {
  try {
    const userId = req.params.userid;
    const { productId, quantity, price } = req.body;

    let cart = await Cart.findOne({ userId: userId });
    let product = await Product.findById(productId);

    if (!product) {
      res.status(404).json({ Message: "Product Not Found !" });
    }

    const name = product.name;
    const image = product.image;
    const description = product.description;
    const category = product.category;

    if (cart) {
      let productIndex = cart.products.findIndex(
        (p) => p.productId === productId
      );

      if (productIndex > -1) {
        let productItem = cart.products[productIndex];
        productItem.quantity += quantity;
        cart.products[productIndex] = productItem;
      } else {
        cart.products.push({
          productId,
          quantity,
          name,
          image,
          description,
          category,
          price,
        });
      }

      cart.bill += quantity * price;
      cart = await cart.save();
      return res.status(201).json(cart);
    } else {
      const newCart = await Cart.create({
        userId,
        products: [
          {
            productId,
            quantity,
            name,
            quantity,
            image,
            description,
            category,
            price,
          },
        ],
        bill: quantity * price,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateCartItem = async (req, res) => {
  const userId = req.params.userid;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId: userId });
    let product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json("Product Not found !");
    }

    if (!cart) {
      return res.status(400).json("Cart not found !");
    } else {
      let productIndex = cart.products.findIndex(
        (p) => p.productId == productId
      );

      if (productIndex == -1)
        return res.status(404).send("Item not found in cart!");
      else {
        let productItem = cart.products[productIndex];
        productItem.quantity = quantity;
        cart.products[productIndex] = productItem;
      }
      cart.bill = cart.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      );
      cart = await cart.save();

      return res.status(201).json(cart);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteCartItem = async (req, res) => {
  const userId = req.params.userid;
  const productId = req.params.productId;

  try {
    let cart = await Cart.findOne({ userId: userId });
    let productIndex = cart.products.findIndex((p) => p.productId == productId);
    if (productIndex > -1) {
      let productItem = cart.products[productIndex];
      cart.bill -= productItem.quantity * productItem.price;
      cart.products.splice(productIndex, 1);
    }
    cart = await cart.save();
    return res.status(201).send(cart);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllCarts,
  getCartByUserId,
  addCart,
  editCart,
  deleteCart,
  addCartItem,
  getCartItems,
  updateCartItem,
  deleteCartItem,
};
