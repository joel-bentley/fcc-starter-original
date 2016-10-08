var path = require('path');

module.exports = {
    entry: [
        './app/main'
    ],
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js',
        publicPath: '/public/js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
