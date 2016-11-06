if (process.env.NODE_ENV === 'production') {
    module.exports = {
        webpackAssets: process.env.webpackAssets && JSON.parse(process.env.webpackAssets),
        chunkManifest: process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets)
    }
}