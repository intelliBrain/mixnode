/* eslint no-console: 0 */

const packager = require('electron-packager');
const path = require('path');

packager({
    platform: 'linux',
    arch: 'x64',
    dir: path.resolve(__dirname, '../'),
    prune: true,
    out: path.resolve(__dirname, '../package')
}, (e) => console.log(e));
