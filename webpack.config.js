'use strict';
const NODE_ENV = process.env.NODE_ENV || 'development';
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
    },
    watch: NODE_ENV == 'development',

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};

if (NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })

    )
};