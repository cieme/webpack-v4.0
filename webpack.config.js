const path = require("path"); //node js 基本包 处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: ["vue-loader", 'style-loader', "css-loader"]
        }, {
            test: /\.css$/,
            use: ['vue-style-loader','style-loader', "css-loader"]
        }, {
            test: /\.(gif|jp?g|svg|png)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]'
                }
            }]
        }]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
}