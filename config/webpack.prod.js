const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base');
const HtmlWebpack = require('html-webpack-plugin');


module.exports = merge(baseConfig, {
    target: 'electron-renderer',

    devtool: 'cheap-module-source-map',

    entry: [
        './src/main.js'
    ],

    output: {
        path: path.join(__dirname, '../src/dist'),
        publicPath: './dist/'
    },

    node: {
        __dirname: false,
        __filename: false
    },

    plugins: [
        new HtmlWebpack({
            filename: './app.html',
            template: 'src/app.html',
            inject: false
        }),
    ]

});
