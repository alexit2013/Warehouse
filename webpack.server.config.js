const path = require('path');

const base = {

    name: 'server',
    target: 'node',

    entry: {
        server: './src/server/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './public'),
    },

    node: {
        __dirname: false,
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
        }],
    },
};

module.exports = base;
