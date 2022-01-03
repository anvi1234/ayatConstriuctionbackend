const { json } = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err)=>{
    if(!err){
        console.log("Mongodb connected successfully");
    }
    else{
        console.log("Error in mongodb connection:" +json.stringify(err,undefined,2));
    }
});

require("./user.model");
require("./expenses.model")
