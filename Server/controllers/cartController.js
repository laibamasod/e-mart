const express = require('express');
const {
    Product,
    Category,
    Buyer,
    BuyerRegistration,
    Purchase,
    Cart,
    SellerRegistration,
    Seller
  } = require('../models/emartModel')
const router = express.Router();

// GET all cart items
router.get('/', async (req, res) => {
    try {
      const cartItems = await Cart.find();
      res.json(cartItems);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a single item from the cart by ID
router.get('/:id', async (req, res) => {
    try {
      const cartItem = await Cart.findById(req.params.id);
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      res.json(cartItem);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // POST a new item to the cart
  router.post('/', async (req, res) => {
    const newItem = new Cart({
      productID: req.body.productID,
      buyerID: req.body.buyerID
    });
  
    try {
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;