const router = require('express').Router();

const {User, Thought, Reaction} = require('../../models')

const {getThoughts, 
    createThought, 
    getThoughtById, 
    deleteThought, 
    updateThought, 
    createReaction, 
    deleteReaction} = require('../../controllers/thoughtController')

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

//POST Route to Add a Reaction to a Thought
router.route('/:thoughtId/Reaction').get(getThoughts).post(createReaction);

//DELETE Route to delete a Reaction
router.route('/:thoughtId/reactions/:reactionId').get(getThoughts).delete(deleteReaction);

module.exports = router;