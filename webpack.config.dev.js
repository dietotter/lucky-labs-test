const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {

    entry: {
        app: [
            '@babel/polyfill', path.resolve(__dirname, 'src/index.js')
        ]
    },

    mode: 'development',

    devServer: {
        contentBase: 'dist',
        port: 3000
    },

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
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
    ],

    devtool: 'cheap-source-map',
}