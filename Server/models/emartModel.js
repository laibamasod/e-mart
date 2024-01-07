const mongoose = require('mongoose');

// Schema for Products
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  rating: Number,
  productQuantity: Number,
  salesQuantity: Number,
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller'
  },
  pictureURL:{ 
    data: Buffer, 
    contentType: String
  }
});

const Product = mongoose.model('Product', productSchema);

// Schema for Category
const categorySchema = new mongoose.Schema({
  category_name: String
});

const Category = mongoose.model('Category', categorySchema);

// Schema for Buyer
const buyerSchema = new mongoose.Schema({
  buyerRegID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BuyerRegistration'
  },
  shippingAddress: String,
  contact: String
});

const Buyer = mongoose.model('Buyer', buyerSchema);

// Schema for Buyer Registration
const buyerRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {type: Boolean, default: false},
  emailToken: String
});

const BuyerRegistration = mongoose.model('BuyerRegistration', buyerRegistrationSchema);

// Schema for Purchase
const purchaseSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  buyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer'
  },
  date: Date,
  purchaseQuantity: Number,
  purchasePrice: Number
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

// Schema for Cart
const cartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  buyerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buyer'
  }
});

const Cart = mongoose.model('Cart', cartSchema);

// Schema for Seller Registration
const sellerRegistrationSchema = new mongoose.Schema({
  company_name: String,
  email: String,
  password: String,
  verificationCode: String
});

const SellerRegistration = mongoose.model('SellerRegistration', sellerRegistrationSchema);

// Schema for Seller
const sellerSchema = new mongoose.Schema({
  sellerRegID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SellerRegistration'
  },
  profilePicture: String,
  headline: String
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = {
  Product,
  Category,
  Buyer,
  BuyerRegistration,
  Purchase,
  Cart,
  SellerRegistration,
  Seller
};