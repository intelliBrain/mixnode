require('dotenv').load();

const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const dotenvWebpack = require('webpack-dotenv-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['react', 'react-dom', 'react-router']
    },
    devtool: 'cheap-module-source-map',

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },

    target: 'electron-renderer',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

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
