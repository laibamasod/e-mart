const express = require('express');
require('./models/db');

const app = express();

app.listen(8080, ()=>{
    console.log("Server at 8080");
});