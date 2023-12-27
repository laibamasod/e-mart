const express = require('express');
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