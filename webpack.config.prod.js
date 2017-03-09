var webpack = require('webpack');
var path = require('path');

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
        filename: 'app.js',
        publicPath: '/',
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
                test: /\.jsx*$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.json$/,
                use: 'json-loader',
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
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compressor: {
              warnings: false,
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
};
