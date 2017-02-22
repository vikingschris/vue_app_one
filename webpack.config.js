
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015"]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            }
        ]
    }
};