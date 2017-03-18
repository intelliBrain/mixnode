
module.exports = {
    target: 'electron-main',

    entry: [
        './src/index.js'
    ],

    output: {
        path: __dirname,
        filename: '../src/mixnode.js'
    },

    node: {
        __dirname: false,
        __filename: false
    },


};
