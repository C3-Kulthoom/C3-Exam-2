// db
const mongoose = require("mongoose")
 
require("dotenv").config()

const options ={

}
mongoose.conect("mongoodb://localhost:27017/examDb", options).then(
    ()=>{console.log("db connected");} , 
    (err)=>{console.log((err));})

    module.exports = mongoose 