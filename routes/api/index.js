const router = require('express').Router();


const {User, Thought, Reaction} = require('../../models')




const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');
// const reactionRoutes = require('./commentRoutes');

router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)
// router.use('/reaction', commentRoutes)

module.exports = router
