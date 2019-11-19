'use strict';

const webpack = require('webpack')
const path = require('path')

module.exports = {

    entry: {
        app: [
            '@babel/polyfill', path.resolve(__dirname, 'src/index.js')
        ]
    },

    devtool: 'cheap-source-map',

    output: {
        filename: '[name].bundle.js',
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
