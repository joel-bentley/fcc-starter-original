/**
 * Module dependencies.
 */
var express = require('express');
var session = require('express-session');
var chalk = require('chalk');
var dotenv = require('dotenv');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

/**
 * Load environment variables from .env file.
 */
dotenv.load();

/**
 * Controllers (route handlers).
 */
var routeController = require('./controllers/route');
var clickController = require('./controllers/click');

/**
 * API keys and Passport configuration.
 */
var passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', function() {
	console.log('%s MongoDB connection established!', chalk.green('✓'));
});
mongoose.connection.on('error', function() {
	console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
	process.exit();
});
mongoose.Promise = global.Promise;

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static(path.join(__dirname, '/public')));

/**
 * Primary app routes.
 */
//app.get('/', passportConfig.isAuthenticated, routeController.index);
app.get(['/', '/profile'], routeController.index);
app.get('/login', routeController.getLogin);
app.get('/logout', routeController.getLogout);

/**
 * OAuth authentication routes. (Sign in)
 */
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

/**
 * API routes.
 */
app.get('/api/:id/clicks', passportConfig.isAuthenticated, clickController.getClicks);
app.post('/api/:id/clicks', passportConfig.isAuthenticated, clickController.addClick);
app.delete('/api/:id/clicks', passportConfig.isAuthenticated, clickController.resetClicks);

app.get('/api/:id', passportConfig.isAuthenticated, function(req, res) {
	res.json(req.user.github);
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
	console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});
