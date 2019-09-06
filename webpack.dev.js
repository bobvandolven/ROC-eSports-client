const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "build.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/template.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});