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

// GET all buyer registrations
router.get('/register', async (req, res) => {
  try {
    const buyerRegistrations = await BuyerRegistration.find();
    res.json(buyerRegistrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single buyer registration by ID
router.get('/register/:id', async (req, res) => {
  try {
    const buyerRegistration = await BuyerRegistration.findById(req.params.id);
    if (!buyerRegistration) {
      return res.status(404).json({ message: 'Buyer registration not found' });
    }
    res.json(buyerRegistration);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new buyer registration
router.post('/register', async (req, res) => {
  const newBuyerRegistration = new BuyerRegistration({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    verificationCode: req.body.verificationCode
    
  });

  try {
    const savedBuyerRegistration = await newBuyerRegistration.save();
    res.status(201).json(savedBuyerRegistration);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

