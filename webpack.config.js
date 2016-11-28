'use strict';

var path = require('path');
var webpack = require('webpack');
var FlowtypePlugin = require('flowtype-loader/plugin');

const js_dir = path.join(__dirname, 'res');
const src_dir = path.join(js_dir, 'src');

module.exports = {
    entry: './res/src/main.js',
    output: {
        path: js_dir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: src_dir,
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-0'],
            },
        }],
    },
    plugins: [
        new FlowtypePlugin(),
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
    resolve: {
        modulesDirectories: [
            src_dir,
            "node_modules"
        ]
    }
};
