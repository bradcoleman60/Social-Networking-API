const mongoose = require('mongoose');

// Wrap Mongoose around the local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/socialnetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export Connection so other files can use it
module.exports = mongoose.connection;