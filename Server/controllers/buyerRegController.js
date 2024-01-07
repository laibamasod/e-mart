const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const createToken = (_id) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtSecretKey, { expiresIn: "3d" });
};
const {sendVerificationMail}  = require('../utils/SendMail');
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

// GET a single buyer registration by email token
router.get('/register/email-token/:emailToken', async (req, res) => {
  try {
    const emailToken = req.params.emailToken;
    const user = await BuyerRegistration.findOne({ emailToken });

    if (!user) {
      return res.status(404).json({ message: 'User with the provided email token not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Login 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await BuyerRegistration.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: 'User email not verified' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = createToken(user._id); // Create a token for the user

    return res.status(200).json({ _id: user._id, name: user.name, email: user.email, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


// POST a new buyer registration
router.post('/register', async (req, res) => {
  console.log("here 2");
  const { name, email, password } = req.body;
  console.log(name,email,password);
  try {
    console.log("now here 3");
    let user = await BuyerRegistration.findOne({ email });
    if (user) return res.status(400).json("User already exists...");
    console.log("now here 4");
    user = new BuyerRegistration({ 
      name, email, password, emailToken:crypto.randomBytes(64).toString("hex") });
      console.log("now here 5");
    if (!name || !email || !password){
      console.log("now here 6");
      return res.status(400).json("All fields are required...");
    }
    console.log("now here 7");
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log("now here 8");
    await user.save();
    sendVerificationMail(user);
    console.log("now here 9");
    const token = createToken(user._id);
    console.log("now here 10");
    return res.status(200).json({ _id: user._id, name, email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/verify-email', async(req,res)=>{
  try{
    const emailToken = req.body.emailToken;
    if(!emailToken) return res.status(404).json("Email Token not found..");
   
    const user = await BuyerRegistration.findOne({ emailToken});
    if(user){
     user.emailToken = null;
     user.isVerified = true;
   
     await user.save();
   
     const token = createToken(user._id);
   
     res.status(200).json({
       _id: user._id,
       name: user.name,
       email: user.email,
       token,
       isVerified: user?.isVerified,
   
     });
    
    } else res.status(404).json("Email verification failed, invalid token");
     }catch(err){
       console.log(err);
       res.status(500).json(error.message);
     }
});



module.exports = router;

