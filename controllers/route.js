var path = require('path');

/**
 * GET /
 */
exports.index = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
};

/**
 * GET /login
 */
exports.getLogin = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/login.html'));
};

/**
 * GET /logout
 */
exports.getLogout = function(req, res) {
	req.logout();
	res.redirect('/login');
};

/**
 * GET /profile
 */
exports.getProfile = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/profile.html'));
}
