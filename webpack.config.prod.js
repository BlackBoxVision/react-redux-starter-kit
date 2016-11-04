var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/client/index.js',
        ],
        vendor: [
            'react',
            'react-dom',
        ]
    },

    output: {
        path: __dirname + '/dist/',
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            'client',
            'node_modules',
        ],
    },

    module: {
        loaders: [
            {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.json$/,
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
        new ExtractTextPlugin('app.[chunkhash].css', { allChunks: true }),
        new ManifestPlugin({
            basePath: '/',
        }),
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest",
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compressor: {
              warnings: false,
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
};
