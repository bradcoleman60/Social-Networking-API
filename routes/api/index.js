const router = require('express').Router();

const userRoutes = require('./users');

router.use('/users', userRoutes)

module.exports = router


// const thoughtRoutes = require('./thoughts');
// const reactionRoutes = require('./commentRoutes');

// router.use('/thoughts', thoughtRoutes)
// router.use('/reaction', commentRoutes)

// const {User, Thought, Reaction} = require('../../models')
