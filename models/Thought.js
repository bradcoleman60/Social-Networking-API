// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define each document
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.NOW 
    },
    username: {
        type: String, 
        required: true},
    reactions: {
    //    Array of ractions
    }


});

// Create the Thought Model based on the schema above
const Thought = mongoose.model('Thought', thoughtSchema);

//Exports this Model
module.exports = Thought;