const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://shivanisawant19:Anita@cluster0.wzh9vcn.mongodb.net/test' , {useUnifiedTopology: true , useNewUrlParser: true})

        // db name RentACar -> test -> booking, car, users
        
    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
// mongodb+srv://shivanisawant19:Anita@cluster0.ds4owf0.mongodb.net/?retryWrites=true&w=majority