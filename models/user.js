// Get Mongoose in dis js app
const mongoose = require('mongoose');

//Create a schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    website: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})