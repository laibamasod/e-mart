const express = require('express');
const router = express.Router();
const { Seller } = require('../models/emartModel'); // Assuming the correct path to your Seller model

// CREATE: Add a new seller
router.post('/sellers', async (req, res) => {
    try {
        const newSeller = await Seller.create(req.body);
        res.status(201).json(newSeller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all sellers
router.get('/sellers', async (req, res) => {
    try {
        const sellers = await Seller.find();
        res.json(sellers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get a single seller by ID
router.get('/sellers/:id', async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id);
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json(seller);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE: Update a seller by ID
router.patch('/sellers/:id', async (req, res) => {
    try {
        const updatedSeller = await Seller.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSeller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json(updatedSeller);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a seller by ID
router.delete('/sellers/:id', async (req, res) => {
    try {
        const deletedSeller = await Seller.findByIdAndDelete(req.params.id);
        if (!deletedSeller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        res.json({ message: 'Seller deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
