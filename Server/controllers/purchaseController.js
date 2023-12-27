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


// GET all purchases
router.get('/', async (req, res) => {
    try {
      const purchases = await Purchase.find();
      res.json(purchases);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a single purchase by ID
router.get(':id', async (req, res) => {
    try {
      const purchase = await Purchase.findById(req.params.id);
      if (!purchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.json(purchase);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // POST a new purchase
  router.post('/', async (req, res) => {
    const newPurchase = new Purchase({
      productID: req.body.productID,
      buyerID: req.body.buyerID,
      date: req.body.date,
      purchaseQuantity: req.body.purchaseQuantity,
      purchasePrice: req.body.purchasePrice
    });
  
    try {
      const savedPurchase = await newPurchase.save();
      res.status(201).json(savedPurchase);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;
  