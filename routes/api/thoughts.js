const router = require('express').Router();

const {User, Thought, Reaction} = require('../../models')

const {getThoughts, createThought, getThoughtById, deleteThought, updateThought} = require('../../controllers/thoughtController')

// GET all Thoughts
router.route('/').get(getThoughts)

// GET a Single Thought by its _id
router.route('/:thoughtId').get(getThoughtById);

// POST a New Thought (don't forget to push created Thoughts -id to  the associated user's thoughts)
router.route('/').get(getThoughts).post(createThought)

//PUT an Update to a thought by its _id
router.route('/:thoughtId').get(getThoughts).put(updateThought);

// DELETE a thought by its _id
router.route('/:thoughtId').get(getThoughts).delete(deleteThought);

//////////////////////////////////

// POST Create a new Reaction stored in a single thoughts reactions array field
// /api/thoughts/:thoughtId / reactions


//DELETE a reaction by reactionId value
// /api/thoughts/:thoughtId / reactions

module.exports = router;