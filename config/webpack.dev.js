const webpack = require('webpack');
const merge = require('webpack-merge');

const port = process.env.PORT || 3000;
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    target: 'electron-renderer',

    entry: [
        `webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`,
        './src/main.tsx'
    ],

    output: {
        publicPath: `http://localhost:${port}/dist/`
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'tslint-loader',
            enforce: 'pre',
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]

});

