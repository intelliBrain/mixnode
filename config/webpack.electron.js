const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    target: 'electron-main',

    entry: [
        'babel-polyfill',
        './src/index.js'
    ],

    output: {
        path: __dirname,
        filename: '../src/mixnode.js'
    },

});
