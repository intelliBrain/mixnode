var webpack = require('webpack');

module.exports = function(config) {
    config.set({

        browsers: ['Chrome'],

        singleRun: true,

        frameworks: ['mocha'],

        files: [
            './test/tests.webpack.js'
        ],

        preprocessors: {
            './test/tests.webpack.js': ['webpack', 'sourcemap']
        },

        reporters: ['dots'],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }]
            }
        },

        webpackServer: {
            noInfo: false,
            quiet: false,
            noInfo: false,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        }

    });
};
