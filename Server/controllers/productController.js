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
    const pictureURL = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };

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

router.get("/getAllProducts", async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({}, '_id name price pictureURL');
    
    // Prepare the products details to be sent
    const productsDetails = products.map(product => ({
      _id: product._id.toString(), // Convert ObjectId to string
      name: product.name,
      price: product.price,
      pictureURL: product.pictureURL ? product.pictureURL.data.toString('base64') : null,
      // Include other fields as needed
    }));

    res.status(200).json(productsDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// Get a single product
router.get("/getOneProducts/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productDetails = {
      _id: product._id.toString(),
      name: product.name,
      price: product.price,
      pictureURL: product.pictureURL ? product.pictureURL.data.toString('base64') : null,
      description: product.description,
      // Include other fields as needed
    };

    res.status(200).json(productDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
