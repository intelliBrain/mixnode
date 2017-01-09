let webpackConfig = require('./webpack.common');

webpackConfig.debug = true;
webpackConfig.devtool = 'cheap-module-source-map';
webpackConfig.devServer = {
    port: 9090,
    historyApiFallback: true,
    contentBase: './src',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};

webpackConfig.module.preloaders = [{
    test: /\.jsx?$/,
    loader: 'eslint',
    exclude: /node_modules/
}];

module.exports = webpackConfig;
