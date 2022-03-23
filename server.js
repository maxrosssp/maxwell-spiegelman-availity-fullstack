var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const runServer = async () => {
    console.log('Starting server...');
    await new WebpackDevServer({ ...webpackConfig.devServer, open: true }, Webpack(webpackConfig)).start();
};

runServer();
