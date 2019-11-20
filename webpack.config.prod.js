const webpack = require('webpack')
const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: [
            '@babel/polyfill', path.resolve(__dirname, 'src/index.js')
        ]
    },

    mode: 'production',

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
        }),
        new HTMLWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            hash: true,
            minify: false
        }),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
    ],

    optimization: {
        minimizer: [new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                    comments: false
                }
            }
        })]
    }
}