const router = require('express').Router();

const {User, Thought, Reaction} = require('../../models')

// GET all Thoughts


// GET a Single Thought by its _id


// POST a New Thought (don't forget to push created Thoughts -id to  the associated user's thoughts)


//PUT an Update to a thought by its _id


// DELETE a thought by its _id


//////////////////////////////////

// POST Create a new Reaction stored in a single thoughts reactions array field
// /api/thoughts/:thoughtId / reactions


//DELETE a reaction by reactionId value
// /api/thoughts/:thoughtId / reactions