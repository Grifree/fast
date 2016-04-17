var webpack = require('webpack')
var _entry = {

}
var addEntry = function addEntry (path) {
    _entry[path] = './' + path + '.js'
}

addEntry('view/demo/index')

module.exports = {
    entry: _entry,
    output: {
        path: './',
        filename: "[name].pick.js"
    },
    devtool: 'source-map',
    externals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': 'jQuery',
        // var _ = require('lodash') 等于 var _ = window._
        'lodash': '_'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.sass$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(png|jpg|gif)$/,
                // 小于 8k 的图片将以 base64 的方式嵌入在 css 中
                loader: 'url?limit=8192'
            }
        ]
    }
};
