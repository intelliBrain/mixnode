const webpack = require('webpack');
const validate = require('webpack-validator');
const merge = require('webpack-merge');

const port = process.env.PORT || 3000;
const baseConfig = require('./webpack.base');

module.exports = validate(merge(baseConfig, {
    debug: true,
    devtool: 'inline-source-map',
    target: 'electron-renderer',

    entry: [
        `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`,
        'babel-polyfill',
        './src/main.js'
    ],

    output: {
        publicPath: `http://localhost:${port}/dist/`
    },

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]

}));

