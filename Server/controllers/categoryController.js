const express = require('express');
const cors = require('cors');
const app = express();

// Apply CORS middleware
app.use(cors());
const {
    Category,
} = require('../models/emartModel')// Assuming you have a Category model

const router = express.Router();

// GET all categories
router.get('/getAll', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
