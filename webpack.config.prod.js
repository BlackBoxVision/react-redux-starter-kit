const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
    cache: true,
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
        extensions: ['', '.js', '.jsx'],
        modules: [
            'client',
            'node_modules'
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js*$/,
                exclude: /node_modules/,
                loader: 'babel',
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
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi]
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
};
