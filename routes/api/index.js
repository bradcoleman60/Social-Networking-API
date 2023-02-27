const router = require('express').Router();

const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)

module.exports = router



// const reactionRoutes = require('./commentRoutes');


// router.use('/reaction', commentRoutes)

// const {User, Thought, Reaction} = require('../../models')
