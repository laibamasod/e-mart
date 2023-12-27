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

// GET all buyers
router.get('/', async (req, res) => {
    try {
      const buyers = await Buyer.find();
      res.json(buyers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a single buyer by ID
  router.get('/:id', async (req, res) => {
    try {
      const buyer = await Buyer.findById(req.params.id);
      if (!buyer) {
        return res.status(404).json({ message: 'Buyer not found' });
      }
      res.json(buyer);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // POST a new buyer
  router.post('/', async (req, res) => {
    const newBuyer = new Buyer({
      buyerRegID: req.body.buyerRegID,
      shippingAddress: req.body.shippingAddress,
      contact: req.body.contact
     
    });
  
    try {
      const savedBuyer = await newBuyer.save();
      res.status(201).json(savedBuyer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // PUT/update a buyer by ID
  router.put('/:id', async (req, res) => {
    try {
      const buyer = await Buyer.findByIdAndUpdate(req.params.id, {
        shippingAddress: req.body.shippingAddress,
        contact: req.body.contact
 
      }, { new: true });
  
      if (!buyer) {
        return res.status(404).json({ message: 'Buyer not found' });
      }
  
      res.json(buyer);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;