var fs = require('fs');
var path = require('path');
var ExternalsPlugin = require('webpack-externals-plugin');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/server/server.js'),

    output: {
        path: __dirname + '/dist/',
        filename: 'server.bundle.js',
    },

    target: 'node',

    node: {
        __filename: true,
        __dirname: true,
    },

    resolve: {
        modules: [
            path.join(__dirname, "src"),
            'node_modules'
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2015',
                            'stage-0',
                        ]
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BABEL_DISABLE_CACHE: JSON.stringify(1)
            }
        })
    ],
};
