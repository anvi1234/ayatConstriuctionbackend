require("./config/config");
require("./models/db");
require('./config/passportConfig');

const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const { links } = require("express/lib/response");
const rtIndex = require("./routes/index.route")
var app = express()
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes/index.route'));
app.use((err,req,res,next)=>{
    if(err.name === 'ValidationError'){
            var valError =[];
            Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
            res.status(422).send(valError)
    }
})

app.listen(process.env.PORT,()=> console.log(`server started at port :${process.env.PORT}`))