const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const isDev = process.env.NODE_ENV === "development";
const ExtractPlugin = require('extract-text-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const config = {
    target: "web",
    mode: 'production',
    entry: {
        app: path.join(__dirname, "src/index.js"),
        vender: ['vue']
    },
    output: {
        filename: "[name].[chunkhash:8].js",
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
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlPlugin({
            title: '首页',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            minify: true,
            hash: false,
            showErrors: true,
            inject: true,
            favicon: "./favicon.ico"
        }),
        new CleanWebpackPlugin(),
        new ExtractPlugin("./styles.[md5:contenthash:hex:8].css"),
    ],
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    minSize: 0, // 最小尺寸，默认0,
                    minChunks: 2, // 最小 chunk ，默认1
                    maxInitialRequests: 5 // 最大初始化请求书，默认1
                },
                vendor: {
                    test: /node_modules/, // 正则规则验证，如果符合就提取 chunk
                    chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
                    priority: 10, // 缓存组优先级
                    enforce: true
                }
            }
        },
        runtimeChunk: true
    }
}
module.exports = config;