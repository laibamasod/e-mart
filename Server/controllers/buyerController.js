const express = require('express');
<<<<<<< HEAD
const router = express.Router();
const { Buyer } = require('../models/emartModel');

// Create a new buyer
router.post('/buyers', async (req, res) => {
    try {
        const newBuyer = await Buyer.create(req.body);
        res.status(201).json(newBuyer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all buyers
router.get('/buyers', async (req, res) => {
    try {
        const buyers = await Buyer.find();
        res.json(buyers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single buyer by ID
router.get('/buyers/:id', async (req, res) => {
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

// Update a buyer by ID
router.patch('/buyers/:id', async (req, res) => {
    try {
        const updatedBuyer = await Buyer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBuyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.json(updatedBuyer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a buyer by ID
router.delete('/buyers/:id', async (req, res) => {
    try {
        const deletedBuyer = await Buyer.findByIdAndDelete(req.params.id);
        if (!deletedBuyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.json({ message: 'Buyer deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
=======
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
>>>>>>> f356198c811c4be7a5722eb44912e0237a3e5b1c
