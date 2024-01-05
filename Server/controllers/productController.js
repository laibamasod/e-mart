const express = require("express");
const {
  Product,
  Category,
  Buyer,
  BuyerRegistration,
  Purchase,
  Cart,
  SellerRegistration,
  Seller,
} = require("../models/emartModel");

const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new product
router.post("/addProducts", upload.single("picture"), async (req, res) => {
  try {
    const { name, description, price, productQuantity, categoryID } = req.body;

    // Use req.file.buffer to access the uploaded file data
    const pictureURL = req.file.buffer;

    const newProduct = await Product.create({
      name,
      description,
      price,
      productQuantity,
      categoryID,
      pictureURL, // Save the uploaded image buffer in the database
    });
    console.log("New product added:", newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Convert the Buffer image data to Base64
    const base64Image = products.picture.toString("base64");

    // Send the Base64 string to the client
    res.json({ ...products.toJSON(), picture: base64Image });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single product
router.get("/getOneProducts/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Convert the Buffer image data to Base64
    const base64Image = product.picture.toString("base64");

    // Send the Base64 string to the client
    res.json({ ...product.toJSON(), picture: base64Image });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a product
router.patch("/updateProducts/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete("/deleteProducts/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
