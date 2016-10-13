var path = require('path');

// GET /
exports.index = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/main.html'));
};

// GET /login
exports.getLogin = function(req, res) {
	res.sendFile(path.join(__dirname, '../public/login.html'));
};

// GET /logout
exports.getLogout = function(req, res) {
	req.logout();
	res.redirect('/login');
};
