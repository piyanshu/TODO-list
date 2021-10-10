// First we have to include mongoose
const mongoose = require('mongoose');

//  Connect our database with mongodb
mongoose.connect('mongodb://localhost/TO_DO_LIST_db');

// Accessing the connection between mongodb and our database
const db = mongoose.connection;

// if there is an error in connecting database
db.on('err', console.log.bind(console, 'Error in accessing the database'));

// if it successfully connected
db.once('open', function(){
    console.log('Successfully connected to database');
});