const express = require("express")
const mongoose = require('mongoose')

const app = express()

//connection to mongodb
mongoose.connect("mongodb://localhost/prakriti_finder",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes

//server configuration
app.listen(3000,()=>console.log("Server started listening on port:3000"))