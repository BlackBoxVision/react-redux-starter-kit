if (process.env.NODE_ENV === 'production') {
    require('babel-polyfill');

    // In production, serve the webpacked server file.
    require('./dist/server.bundle.js');
} else {
    // Babel polyfill to convert ES6 code in runtime
    require('babel-register')({
        "plugins": [
            [
                "babel-plugin-webpack-loaders",
                {
                    "config": __dirname + "/webpack.config.babel.js",
                    "verbose": false
                }
            ]
        ]
    });

    require('babel-polyfill');
    require('./src/server/server');
}