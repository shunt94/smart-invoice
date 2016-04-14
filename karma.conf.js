var path = require('path');
var isTravis = process.env.TRAVIS || false;

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'src/**/__test__/**/*.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.js': ['webpack', 'sourcemap']
        },

        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: path.resolve(__dirname, 'node_modules'),
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                    }
                }, {
                    test: /\.json$/,
                    loader: 'json',
                }, ]
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-phantomjs-launcher'
        ],


        babelPreprocessor: {
            options: {
                presets: []
            }
        },
        browsers:["PhantomJS"],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: isTravis,
    })
};
