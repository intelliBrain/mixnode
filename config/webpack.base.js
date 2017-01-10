require('dotenv').load();

const path = require('path');
const validate = require('webpack-validator');

module.exports = validate({
    entry: {
        app: './src/main.js',
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        path: path.join(__dirname, '../src'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(woff2?|ttf|eot|svg|otf).*$/,
            loader: 'file?hash=sha512&digest=hex&name=fonts/[name]-[hash].[ext]'
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },

    plugins: [],

    externals: Object.keys(require('../package.json').dependencies) || {}
});

