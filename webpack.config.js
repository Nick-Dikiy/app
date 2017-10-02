'use strict';

const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry:{
        app: "./app.js"
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        library: "[name]"
    }
};