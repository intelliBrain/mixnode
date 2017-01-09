const webpack = require('webpack');

let webpackConfig = require('./webpack.common');

webpackConfig.node = {
    __dirname: false,
    __filename: false
};

webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: false,
        mangle: false
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new webpack.optimize.DedupePlugin()
);

module.exports = webpackConfig;
