var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    cache: true,
    debug: true,

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/app.ts'
    },

    output: {
        path: './dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
            minChunks: Infinity
        })
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader',
            exclude: [
                // these packages have problems with their sourcemaps
                path.join(__dirname, 'node_modules', 'rxjs'),
                path.join(__dirname, 'node_modules', '@angular2-material'),
                path.join(__dirname, 'node_modules', '@angular')
            ]
        }],
        noParse: [
            path.join(__dirname, 'node_modules', 'zone.js', 'dist'),
            path.join(__dirname, 'node_modules', 'angular2', 'bundles')
        ],
        loaders: [
            // .ts files for TypeScript
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }

        ]
    },

    resolve: {
        root: [path.join(__dirname, 'src')],
        extensions: ['', '.ts', '.js'],
        alias: {
            'angular2/testing': path.join(__dirname, 'node_modules', '@angular', 'core', 'testing.js'),
            '@angular/testing': path.join(__dirname, 'node_modules', '@angular', 'core', 'testing.js'),
            'angular2/core': path.join(__dirname, 'node_modules', '@angular', 'core', 'index.js'),
            'angular2/platform/browser': path.join(__dirname, 'node_modules', '@angular', 'platform-browser', 'index.js'),
            'angular2/testing': path.join(__dirname, 'node_modules', '@angular', 'testing', 'index.js'),
            'angular2/router': path.join(__dirname, 'node_modules', '@angular', 'router', 'index.js'),
            'angular2/http': path.join(__dirname, 'node_modules', '@angular', 'http', 'index.js'),
            'angular2/http/testing': path.join(__dirname, 'node_modules', '@angular', 'http', 'testing.js')
        }
    },

    devServer: {
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};
