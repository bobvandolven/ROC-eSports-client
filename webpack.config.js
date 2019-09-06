const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.jsx",
    output: {
        filename: "build.js",
        path: path.resolve(__dirname + "/dist")
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
};