const path = require("path"); //node js 基本包 处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
/* dev-serve[2][1] */
const isDev = process.env.NODE_ENV === "development";
module.exports = {
    /* dev-serve[1] target */
    target: "web",
    mode: 'development',
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.common' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [ //使用use 完整写法
                {
                    loader: 'vue-loader',
                },
            ]
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'style-loader', "css-loader"]
        }, {
            test: /\.(gif|jpg|jepg|svg|png)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name: '[name]-aaa.[ext]'
                }
            }]
        }, {
            test: /\.styl/,
            use: [
                'style-loader', "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true
                    }
                }, "stylus-loader"
            ]
        }]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html'),
            inject: true
        })
    ],
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host: "0.0.0.0",
        hot: true,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    performance: {

        hints: false

    }
}
/* dev-serve[2]  判断一下    cross-env NODE_ENV=production*/
/* dev-serve[2][2] */
if (isDev) {
    // config.devSever = {
    //     port: 8000,
    //     host: '0.0.0.0',
    //     /* 错误显示在网页上 */
    //     // overlay: {
    //     //     "error": true,
    //     // }
    // }

}