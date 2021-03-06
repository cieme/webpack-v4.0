const path = require("path"); //node js 基本包 处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
/* dev-serve[2][1] */
// 可能有用 extract-text-webpack-plugin 插件改成了 mini-css-extract-plugin
const isDev = process.env.NODE_ENV === "development";
const ExtractPlugin = require('extract-text-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const config = {
    /* dev-serve[1] target */
    target: "web",
    mode: 'production',
    entry: {
        app: path.join(__dirname, "src/index.js"),
        vender: ['vue']
    },
    output: {
        filename: "bundle.[hash:8].js",
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
            },
            /*  {
                        test: /\.css$/,
                        use: ['vue-style-loader', 'style-loader', "css-loader"]
                    } ,*/
            {
                test: /\.(gif|jpg|jepg|svg|png)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        name: '[name]-aaa.[ext]'
                    }
                }]
            },
            {
                test: /\.styl/,
                use: ExtractPlugin
                    .extract({
                        fallback: "style-loader",
                        use: [
                            "css-loader", {
                                loader: "postcss-loader",
                                options: {
                                    sourceMap: true
                                }
                            }, "stylus-loader"
                        ]
                    })
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        // new HtmlPlugin({
        //     filename: 'index.html',
        //     template: path.resolve(__dirname, 'index.html'),
        //     inject: true,/* 注入 */
        //     favicon:"./favicon.ico"
        // }),
        new HtmlPlugin({
            title: '首页',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            minify: true,
            hash: false,
            showErrors: true,
            inject: true,
            favicon:"./favicon.ico"
        }),
        new CleanWebpackPlugin(),
        //webpacl 4.3 包含了 contenthash 关键字段 所以不能使用 contenthash 用md5:contenthash:hex:8 代替
        // new ExtractPlugin("./styles.[contenthash:8].css")
        new ExtractPlugin("./styles.[md5:contenthash:hex:8].css"),
        //4弃用
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vender"
        // })
        // new webpack.optimize.SplitChunksPlugin({
        //     chunks: "all",
        //     name: true,
        //     cacheGroups: {
        //         vendors: {
        //             name: "vender",
        //             chunks: "all",
        //             minChunks: 2
        //         }
        //     }
        // })
    ],
    // devtool: "cheap-module-eval-source-map",
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: 9000,
    //     host: "0.0.0.0",
    //     hot: true,
    //     overlay: {
    //         warnings: true,
    //         errors: true,
    //     },
    // },
    performance: {
        /* 如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你 */
        hints: false

    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        },
        runtimeChunk: true
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

    // config.module.rules.push({
    //     test: /\.styl/,
    //     use: [
    //         'style-loader',
    //         "css-loader", {
    //             loader: "postcss-loader",
    //             options: {
    //                 sourceMap: true
    //             }
    //         }, "stylus-loader"
    //     ]
    // })


} else {
    // config.output.filename = "[name].[chunkhash:8].js"
    // config.module.rules({
    //     test: /\.styl/,
    //     use: ExtractPlugin
    //         .extract({
    //             fallback: "style-loader",
    //             use: [
    //                 "css-loader", {
    //                     loader: "postcss-loader",
    //                     options: {
    //                         sourceMap: true
    //                     }
    //                 }, "stylus-loader"
    //             ]
    //         })
    // })
    // config.plugins.push(
    //     new ExtractPlugin('styles.[contentHash:8].css')
    // )
}
module.exports = config;