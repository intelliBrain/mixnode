const webpack = require('webpack');
const express = require('express');
const child = require('child_process');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const config = require('./config/webpack.dev');
const compiler = webpack(config);
const argv = require('minimist')(process.argv.slice(2));

const app = express();

const wdm = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
});

app.use(wdm);
app.use(hotMiddleware(compiler));

const server = app.listen(3000, 'localhost', (e) => {
    if(e) {
        return console.error(e);
    }

    if(argv['hot']) {
        child.spawn('npm', ['run', 'start-dev'], { shell: true, env: process.env, stdio: 'inherit'})
            .on('close', (code) => process.exit(code))
            .on('error', (e) => console.error(e));
    }
});

process.on('SIGTERM', () => {
    wdm.close();
    server.close(() => process.exit(0));
});
