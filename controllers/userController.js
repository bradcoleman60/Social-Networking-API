const User  = require('../models/User')

const db = require('../config/connection')

module.exports = {
    // Get all users
    getUsers(req, res) {
        // console.log('Getting all users');
        // console.log('Database:', db.socialnetworkDB);
        // console.log('Collection:', User.collection.name)
        User.find()
        .then((users) => {
            console.log("this is the users:", users);
            res.json(users)
        })
        .catch((err) => res.status(500).json(err));
    },
    getsingleUser(req, res) {
        User.findOne({_id: req.params.id})
        // .select('-__v')
        // .populate('thought')
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No such user with that ID'})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
        
    },
    
    //Create a New User
    createUser(req,res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    //Create a New Friend
    createFriend(req,res) {
        var userIdX = req.params.userId;
        var friendIdX = req.params.friendId;
        console.log("userIdX", userIdX);
        console.log("friendIdX", friendIdX);
        console.log("rec.params:", req.params),

        User.findOneAndUpdate(
                
                {_id: req.params.userId},
                { $addToSet: {friends: req.params.friendId}},
                { new: true}
        )
        
        .then((userIdX, friendIdX) => 
            
            !User.findOne(userIdX) || !User.findOne(friendIdX)
            ? res.status(404).json({message: 'Friend ID or User ID does not exist'})
            : res.json('Friend Added to User')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },
};