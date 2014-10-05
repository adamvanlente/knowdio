// ******************************************
// News Service app
//
// Dumps news articles into a db for easy
// recall / searching.
// __________________________________________

// Add neccessary modules.
var port         = 3250;
var express      = require('express');
var mongoose     = require('mongoose');
var path         = require('path');

var configDB     = require('./config/database.js');

// Connect to database.
mongoose.connect(configDB.url);

// Set up the express application.
var app = express();

// Set jade as the templating engine.
app.set('view engine', 'jade');

// Expose a public directory for the app.
app.use(express.static(path.join(__dirname, 'public')));

// Pass app to route.
require('./app/routes/main.js')(app);

// launch ======================================================================
app.listen(port);
console.log('update server running on port', port);
