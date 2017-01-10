const validate = require('webpack-validator');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

module.exports = validate(merge(baseConfig, {
    target: 'electron-main',

    entry: [
        'babel-polyfill',
        './src/index.js'
    ],

    output: {
        path: __dirname,
        filename: '../src/mixnode.js'
    },

    node: {
        __dirname: false,
        __filename: false
    }

}));
