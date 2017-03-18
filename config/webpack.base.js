const path = require('path');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        path: path.join(__dirname, '../src'),
        filename: 'bundle.js',
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
            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.(woff2?|ttf|eot|svg|otf).*$/,
            use: 'file-loader?hash=sha512&digest=hex&name=fonts/[name]-[hash].[ext]'
        }]
    },

    plugins: [],

    externals: Object.keys(require('../package.json').dependencies) || {}
};

