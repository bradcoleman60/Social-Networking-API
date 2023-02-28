// Require Express Server
const express = require('express');

// Require Routes
const routes = require('./routes')

//Import connection file to DB
const db = require('./config/connection')

//Require all models 
const { User, Thought } = require('./models');

//Designate PORT for server to run on
const PORT = process.env.PORT || 3005;

//Create app express
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

//Start Server with Connection to DB
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API Social Networking Running on port ${PORT}`);
    });
});