const mongoose = require('mongoose');

//for atlas
const dbURL= 'mongodb+srv://tormik_pindi:ALK36LQXD40fM8he@cluster1.5glpwoz.mongodb.net/EMART';

mongoose.connect(dbURL)
.then((result)=>{
    console.log("DB is connected");
})
.catch((err)=>{
    console.log("Error in connection",err);
});