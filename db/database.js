var mongoose = require('mongoose');
// this connects us to our database
var connectionString = process.env.DB_HOST; // caps = final, constant, important as fuuuuuuuuuuuuuu
console.log('Attempting to connect to MongoDB');

mongoose.connect(connectionString); // connect to the db supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to production server');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose error! ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from production server');
});
