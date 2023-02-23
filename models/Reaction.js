// Define Mongoose
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define each document
const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
         },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
        
    },
    createdAt: {
        type: Date,
        default: Date.NOW 
        //Format the timestamp on query? 
    },
    
});

// Create the Thought Model based on the schema above
const Reaction = mongoose.model('Reaction', reactionSchema);

//Exports this Model
module.exports = Reaction;