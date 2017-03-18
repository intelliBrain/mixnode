const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base');
const HtmlWebpack = require('html-webpack-plugin');


module.exports = merge(baseConfig, {
    target: 'electron-renderer',

    devtool: 'cheap-module-source-map',

    output: {
        path: path.join(__dirname, '../src/dist'),
    },

    plugins: [
        new HtmlWebpack({
            filename: './app.html',
            template: 'src/app.html',
            inject: false
        }),
    ]

});
