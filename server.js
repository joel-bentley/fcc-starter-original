// Module dependencies.
var express = require('express');
var session = require('express-session');
var chalk = require('chalk');
var dotenv = require('dotenv');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var passport = require('passport');

var webpack = require('webpack');
var config = require('./webpack.config');

// Load environment variables from .env file.
dotenv.load();

// Controllers (route handlers).
var routeController = require('./controllers/route');
var clickController = require('./controllers/click');

// API keys and Passport configuration.
var passportConfig = require('./config/passport');

// Create Express server.
var app = express();

var compiler = webpack(config);

// Connect to MongoDB.
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', function() {
	console.log('%s MongoDB connection established!', chalk.green('✓'));
});
mongoose.connection.on('error', function() {
	console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
	process.exit();
});
mongoose.Promise = global.Promise;

// Express configuration.
app.set('port', process.env.PORT || 8080);
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(favicon(path.join(__dirname, '/public/favicon.png')));
app.use('/public', express.static(path.join(__dirname, '/public')));

if (app.get('env') === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

// Primary app routes.
var clientAppRoutes = ['/', '/profile'];
if (app.get('env') === 'production') {
	app.get(clientAppRoutes, passportConfig.isAuthenticated, routeController.index);
} else {
	app.get(clientAppRoutes, routeController.index);
}
app.get('/login', routeController.getLogin);
app.get('/logout', routeController.getLogout);

// OAuth authentication routes.
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

// API routes.
app.get('/api/clicks', passportConfig.isAuthenticated, clickController.getClicks);
app.post('/api/clicks', passportConfig.isAuthenticated, clickController.addClick);
app.delete('/api/clicks', passportConfig.isAuthenticated, clickController.resetClicks);

app.get('/api/profile', passportConfig.isAuthenticated, function(req, res) {
	res.json(req.user.github);
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

// Start Express server.
app.listen(app.get('port'), function() {
	console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});
