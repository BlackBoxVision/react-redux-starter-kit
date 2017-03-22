const path = require('path');
const BabiliWebpackPlugin = require('babili-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
    cache: true,
    entry: {
        app: path.join(__dirname, "src/client", "index.js"),
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        root: path.resolve(__dirname, 'client')
    },
    module: {
        loaders: [
            {
                test: /\.js*$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
                query: {
                    cacheDirectory: true
                },
                options: {
                    presets: [
                        [
                            'es2015',
                            {
                                modules: false
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.json$/,
	            exclude: /node_modules/,
                loader: 'json-loader',
            }
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                BABEL_DISABLE_CACHE: JSON.stringify(1)
            }
        }),
	    new webpack.optimize.CommonsChunkPlugin({
		    name: 'vendor',
		    minChunks: Infinity,
		    filename: 'vendor.js',
	    }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.NoErrorsPlugin(),
        new BabiliWebpackPlugin({
            comments: false
        })
    ],
};
