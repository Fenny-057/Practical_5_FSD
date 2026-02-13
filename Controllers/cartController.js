const Cart = require("../models/Cart");

exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find().populate("products.product");
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};
