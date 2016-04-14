'use strict'

let debug = process.env.NODE_ENV !== 'production'
let webpack = require('webpack')
let path = require('path')

let ExtractTextPlugin = require('extract-text-webpack-plugin')

let sharedTasks = [
    //new ExtractTextPlugin('styles.css')
]

let devTasks = sharedTasks.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
])

let buildTasks = sharedTasks.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false
    })
])

module.exports = {
    devtool: debug ? 'inline-sourcemap' : null,
    entry: [
        './src/app.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(scss|css)$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|png|svg)$/,
            loaders: [
                'url-loader?name=[path][name].[ext]'
            ]
        }]
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            assets: 'src/assets',
            css: 'src/assets/css',
            components: 'src/components'
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.min.js',
        publicPath: '/static/'
    },
    plugins: debug ? devTasks : buildTasks,
    externals: {
        'cheerio': true,
        'react-addons-test-utils': true
    }
}
