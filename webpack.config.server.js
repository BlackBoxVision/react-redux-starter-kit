const fs = require('fs');
const path = require('path');
const ExternalsPlugin = require('webpack-externals-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "src/server", "server.js"),
	target: 'node',
    cache: true,
    output: {
        path: __dirname + '/dist/',
        filename: 'server.bundle.js',
    },
    node: {
        __filename: true,
        __dirname: true,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve(__dirname, 'server'),
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: [
                        'react',
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
	                    "transform-decorators-legacy"
                    ]
                },
                plugins: [
                    [
                        'babel-plugin-webpack-loaders', {
                            'config': './webpack.config.babel.js',
                            "verbose": false
                        }
                    ]
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BABEL_DISABLE_CACHE: JSON.stringify(1)
            }
        }),
        new ExternalsPlugin({
            type: 'commonjs',
            include: path.resolve(__dirname, 'node_modules'),
        }),
    ],
};
