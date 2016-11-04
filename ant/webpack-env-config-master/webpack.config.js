/* eslint-disable */

var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin')

var PORT = 8000

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[hash]-[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader', 'css?sourceMap&-minimize!postcss-loader'
                )
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [ "style", "css?sourceMap", "sass?sourceMap" ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.jsx?$/,
                include: /src/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015', 'stage-0', 'react' ],
                    plugins: [ 'transform-runtime' ],
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: [
        // 输出html文件
        new HtmlWebpackPlugin({
            title: 'webpack配置',
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html',
            cache: true,
            hash: true
        }),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        // 打包后自动打开浏览器
        new openBrowserWebpackPlugin({ url: 'http://localhost:' + PORT }),
        //代码压缩：UglifyJsPlugin,
        // 给输出的文件头部添加注释信息
        new webpack.BannerPlugin('This file is created by Pyang at ' + new Date()),
        // 设置环境变量： DefinePlugin
        // 将css文件以link标签引入
        new ExtractTextPlugin('/[hash]-[name].css'),

        // 报错但不退出webpack进程
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: PORT,
        contentBae: './dist',
        historyApiFallback: true
    },
    devtool: "source-map"
}