const router = require('express').Router();

const express = require('express');

const {getUsers, createUser, getsingleUser} = require('../../controllers/userController')

const {User, Thought, Reaction} = require('../../models')

const db = require('../../config/connection')

//Require Express
const app = express();

// GET all Users   /api/user    
router.route('/').get(getUsers);

//Get User by ID
router.route('/:id').get(getsingleUser)

module.exports = router;

// router.post('/', (req, res) => {
//     console.log("from insomnia:", req.body)
//     db.collection('User').insertOne(
//         {username: req.body.username, email: req.body.email},
//         (err, results) => {
//             if (err) throw err;
//             res.json(results);
//         }
//     );
// });

// router.get('/', (req, res) => {
//     User.find()
//         .then((users) => res.json(users))
//         .catch((err) => res.status(500).json(err));
// })






// GET one User by _id and populate thought and friend data


//POST Route to Create a new User

router.route('/').get(getUsers).post(createUser)
// router.route('/').post(createUser)



//PUT an Update to a User



//DELETE a User





//POST New Friend to a User's Friend list
//    /api/users/:userId/friends/:friendId 


// DELETE a Friend from a User's Friend List
//    /api/users/:userId/friends/:friendId 



