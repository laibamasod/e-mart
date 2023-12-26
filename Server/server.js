const express = require('express');
require('./models/db');
const productController = require('./controllers/productController');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/product", productController );
app.listen(8080, ()=>{
    console.log("Server at 8080");
});