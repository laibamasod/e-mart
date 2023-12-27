const express = require('express');
require('./models/db');
const buyerRegController = require('./controllers/buyerRegController');
const buyerController = require('./controllers/buyerController');
const purchaseController = require('./controllers/purchaseController');
const cartController = require('./controllers/cartController');

const productController = require('./controllers/productController');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/buyerreg", buyerRegController);
app.use("/buyer", buyerController);
app.use("/purchase", purchaseController);
app.use("/cart", cartController);

app.use("/product", productController );
app.listen(8080, ()=>{
    console.log("Server at 8080");
});