var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    port: 9090,
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000},
  },

  module: {
    loaders: [
        {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/}
    ],
  }
};
