var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

// 根路径
var ROOT_PATH = path.resolve(__dirname);
// 路径配置
var config = { //  __dirname + 'dist'

    paths: {
        buildOutPutPath: path.join(ROOT_PATH, "dist"),
        buildSrc: path.join(ROOT_PATH, "/src")
    }
}
// webpack配置
module.exports = function (webpackConfig) {

    //  antd本身配置
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: 'css',
    }]);

    // 1. 配置入口
    webpackConfig.entry = {
        index: './src/entry.jsx'
    }
    // 2. 配置出口

    webpackConfig.output = {
        path: config.paths.buildOutPutPath,
        filename: '[name].js',
        publicPath: '/',        //设置为想要的资源访问路径
        chunkFilename: '[name].chunks.js'
    }
    // 3. 不需要引入常规模块，由webpack自动引入
    webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
            "$": "jquery",
            "React": "react"
        })
    );

    // 4.抽取公共js

    // 5.其他配置
    webpackConfig.resolve = {
        // 无需在写后缀名称
        extension: ['', '.js', '.jsx'],
        // 直接引入别名，不需要引入路径
        alias: {
            
        }

    };
    return webpackConfig;
};
