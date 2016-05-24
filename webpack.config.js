var _entry = {}
var addEntry = function addEntry (path) {
    _entry[path] = './' + path + '.js'
}

addEntry('view/common/common')
addEntry('view/demo/index')

module.exports = {
    entry: _entry,
    output: {
        path: './',
        filename: "[name].pack.js"
    },
    devtool: 'source-map',
    externals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'classnames': 'classNames'
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
            },
            // 不内嵌字体文件
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=9999999&name=[path][name].[ext]'
            }
        ]
    }
};
