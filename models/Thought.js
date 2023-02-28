
const { Schema, model} = require('mongoose')

const format = require('date-format');

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
        default: format('MM-dd-yyyy',new Date())
    },
    username: {
        type: String, 
        required: true,
    },
    reactions: [
        {
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
            
        },
        username: {
            type: String,
            required: true
        } 
    }]
}, 
{
collection: 'Thought',
versionKey: false,
toJSON: {
    virtuals: true,
     },
     id: false,
      }

);

thoughtSchema
    .virtual('createdAtFormatted')
    // Getter
    .get(function (){
        return format('MM-dd-yyyy', this.createdAt)
    })

// Create the Thought Model based on the schema above
const Thought = mongoose.model('Thought', thoughtSchema);

//Exports this Model
module.exports = Thought;