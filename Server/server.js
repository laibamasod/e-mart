const express = require('express');
require('./models/db');
const emartController = require('./controllers/emartController');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/", emartController);
app.listen(8080, ()=>{
    console.log("Server at 8080");
});