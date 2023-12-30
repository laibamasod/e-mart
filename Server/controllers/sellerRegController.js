const express = require('express');
const router = express.Router();
const { SellerRegistration } = require('../models/emartModel'); // Assuming the correct path to your SellerRegistration model

// CREATE: Add a new seller registration
router.post('/createSellerRegistrations', async (req, res) => {
    try {
        const newSellerRegistration = await SellerRegistration.create(req.body);
        res.status(201).json(newSellerRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ: Get all seller registrations
router.get('/getALLSellerRegistrations', async (req, res) => {
    try {
        const sellerRegistrations = await SellerRegistration.find();
        res.json(sellerRegistrations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ: Get a single seller registration by ID
router.get('/getOneSellerRegistrations/:id', async (req, res) => {
    try {
        const sellerRegistration = await SellerRegistration.findById(req.params.id);
        if (!sellerRegistration) {
            return res.status(404).json({ message: 'Seller Registration not found' });
        }
        res.json(sellerRegistration);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE: Update a seller registration by ID
router.patch('/updateSellerRegistrations/:id', async (req, res) => {
    try {
        const updatedSellerRegistration = await SellerRegistration.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSellerRegistration) {
            return res.status(404).json({ message: 'Seller Registration not found' });
        }
        res.json(updatedSellerRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE: Delete a seller registration by ID
router.delete('/deleteSellerRegistrations/:id', async (req, res) => {
    try {
        const deletedSellerRegistration = await SellerRegistration.findByIdAndDelete(req.params.id);
        if (!deletedSellerRegistration) {
            return res.status(404).json({ message: 'Seller Registration not found' });
        }
        res.json({ message: 'Seller Registration deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
