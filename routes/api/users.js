const router = require('express').Router();

const express = require('express');

const {getUsers, 
    createUser, 
    getsingleUser, 
    updateUser, 
    deleteUser, 
    createFriend, 
    deleteFriend} = require('../../controllers/userController')

const {User, Thought, Reaction} = require('../../models')

const db = require('../../config/connection')

//Require Express
const app = express();

// GET all Users   /api/user    
router.route('/').get(getUsers);

//Get User by ID
router.route('/:userId').get(getsingleUser);

//POST Route to Create a new User
router.route('/').get(getUsers).post(createUser);

//PUT To update User
router.route('/:userId').get(getUsers).put(updateUser);

//Delete a user
router.route('/:userId').get(getUsers).delete(deleteUser);

//POST Route to Add a Friend to a User
router.route('/:userId/friends/:friendId').get(getUsers).post(createFriend);

//DELETE Route to delete a friend
router.route('/:userId/friends/:friendId').get(getUsers).delete(deleteFriend)

module.exports = router;




