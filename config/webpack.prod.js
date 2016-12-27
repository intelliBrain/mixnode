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

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },

    target: 'electron-renderer',
    devtool: 'source-map',

    node: {
        __dirname: false,
        __filename: false
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
    plugins: [
        new dotenvWebpack(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpack({
            template: './src/index.html',
            inject: true
        })
    ]
};
