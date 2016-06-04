var path = require('path');
module.exports = {
    entry: './src/app.js',
    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

    target: 'electron-renderer',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devServer: {
        port: 9090,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: 'style!css!less',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }
};
