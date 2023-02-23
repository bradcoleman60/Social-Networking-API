// Define Mongoose
const mongoose = require('mongoose');

//Require Email Validator
const uniqueValidator = require('mongoose-unique-validator');

// Create a new instance of the Mongoose schema to define each document
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true, 
        trimmed: true},
    email: {
        type: String, 
        required: true, 
        unique: true, 
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    thoughts: {
        thoughts: Thought
    },
    friends:{
        friends: XXX
    },    

});

// Create the User Model based on the schema above
const User = mongoose.model('User', userSchema);

//Invokes the Unique Email Validator Plugin
userSchema.plugin(uniqueValidator);

//Exports this Model
module.exports = User;