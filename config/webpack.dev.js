require('dotenv').load();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const dotenvWebpack = require('webpack-dotenv-plugin');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['react', 'react-dom', 'react-router']
    },
    debug: true,
    devtool: 'cheap-module-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    target: 'electron-renderer',

    devServer: {
        port: 9090,
        historyApiFallback: true,
        contentBase: './src',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint',
            exclude: /node_modules/
        }],

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
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new HtmlWebpack({
            template: './src/index.html',
            inject: true
        })
    ]
};
