const webpack = require("webpack");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if(stage === "build-htmnl" || stage === "develop") {
        actions.setWebpackConfig({
            plugins: [
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                }),
            ],
        })
    }
    actions.setWebpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: [require.resolve("buffer/"), "Buffer"],
                process: 'process/browser',
            }),
        ],
        resolve: {
            fallback: {
                "crypto": false,
                "stream": require.resolve("stream-browserify"),
                "assert": false,
                "util": false,
                "http": false,
                "https": false,
                "os": false,
                "url" : false,
            },
        },
    })
}