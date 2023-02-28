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
    getThoughtById(req, res) {
        Thought.findById({ _id: req.params.thoughtId})
            .then((thoughts) =>
            !thoughts
            ? res.status(404).json({message: 'No Thought by that ID exists'})
            : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));

    },
    createThought(req,res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
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
    deleteThought(req, res) {
        console.log(req.params)
        Thought.findByIdAndRemove({ _id: req.params.thoughtId})
        .then((thought) => 
            !thought
                ? res.status(404).json({message: 'No thought with that id exists'})
                : User.findOneAndUpdate(
                    {thoughts: req.params.thoughtId},
                    { $pull: {thoughts: req.params.thoughtId}},
                    {new: true}
                )
               
        )
        .then((user) => 
            !user
              ? res
               .status(404)
               .json({ message: 'Thought deleted but no user was identified'})
          : res.json({ message: 'Thought was deleted'})
        ) 
        .catch((err) => res.status(500).json(err))
        
    },
    updateThought(req, res) {
        console.log("req.body:", req.body)
        console.log("req.bod.thoughtText: ", req.body.thoughtText)
        console.log("thought Id:", req.params.thoughtId)
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: {thoughtText: req.body.thoughtText}},
            { returnOriginal: false}
            )
            .then((thoughts) => {
                console.log("this is the updated Thought: ", thoughts);
                res.json(thoughts)
            })
            .catch((err) => res.status(500).json(err))

    }
    
    
    







}