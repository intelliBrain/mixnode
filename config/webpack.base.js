const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: Object.keys(require('../package.json').dependencies)
    },

    output: {
        path: path.join(__dirname, '../src'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(woff2?|ttf|eot|svg|otf).*$/,
            use: 'file-loader?hash=sha512&digest=hex&name=fonts/[name]-[hash].[ext]'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            minChunks: Infinity
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    }

};

