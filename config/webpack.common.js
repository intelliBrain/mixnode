require('dotenv').load();

const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const dotenvWebpack = require('webpack-dotenv-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },

    target: 'electron-renderer',

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

    plugins: [
        new dotenvWebpack(),
        new HtmlWebpack({
            template: './src/index.html',
            inject: true
        })
    ]
};

