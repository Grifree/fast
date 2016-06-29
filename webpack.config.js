var _entry = {}
var addEntry = function addEntry (path) {
    _entry[path] = './' + path + '.js'
}

addEntry('view/common/common')
addEntry('view/demo/index')

// require 用于配合 README.md 中的文档
addEntry('m/load/require')
addEntry('m/app/require')

module.exports = {
    entry: _entry,
    output: {
        path: './',
        filename: "[name].pack.js"
    },
    devtool: 'source-map',
    externals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': '__YOU_NEED_REQUIRE_USE_MODULE.jQuery',
        'react': '__YOU_NEED_REQUIRE_USE_MODULE.React',
        'react-dom': '__YOU_NEED_REQUIRE_USE_MODULE.ReactDOM'
    },
    module: {
        preLoaders: [
            {
               test: /\.js$/,
               loaders: ['fis-inline-style']
            }
        ],
        postLoaders: [
            // 如果不需要兼容IE8请去掉 es3ify
            {
                test: /\.js$/,
                loaders: ['es3ify']
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ["transform-decorators-legacy","transform-class-properties"]
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
                loader: 'url?limit=8192&name=[path][name].[ext]'
            }
        ]
    }
};
