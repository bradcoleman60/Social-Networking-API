const Thought  = require('../models/Thought')

const User  = require('../models/User')


const db = require('../config/connection')

module.exports = {
    getThoughts(req, res) {
        // console.log('Getting all users');
        // console.log('Database:', db.socialnetworkDB);
        // console.log('Collection:', User.collection.name)
        Thought.find()
        .then((thoughts) => {
            console.log("this is the thought:", thoughts);
            res.json(thoughts)
        })
        .catch((err) => res.status(500).json(err));
    },
    createThought(req,res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                // console.log("rec.body.id:", req.body.id),
                // console.log("req.body:", req.body),
                // console.log("thoughtData._id:", thoughtData._id),


                {_id: req.body.userId},
                { $addToSet: {thoughts: thoughtData._id}},
                { new: true}
            );
        })
        .then((user) => 
            !user
            ? res.status(404).json({message: 'Thought created but no user found with this id'})
            : res.json('Created Thought')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    







}