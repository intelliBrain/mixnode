const webpack = require('webpack');

let webpackConfig = require('./webpack.common');

webpackConfig.node = {
    __dirname: false,
    __filename: false
};

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.optimize.DedupePlugin()
);

module.exports = webpackConfig;
