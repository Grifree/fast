var conf = {
    webpackEntry: [
        '/m/app/r.js',
        '/m/icon/r.js',
        '/m/load/r.js',

        '/base/library.js',
        '/view/common/common.js',
        '/view/demo/index.js',
        '/view/index/index.js'
    ],
    webpackExternals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    markrun: {
        lang: {
            js: function (source) {
                var result = require('babel-core').transform(source, {
                    presets: [
                         require('babel-preset-es2015'),
                         require('babel-preset-react')
                    ]
                })
                return {
                    type: 'js',
                    code: result.code
                }
            }
        },
        template: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge" ></meta>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
<!--<script src="/vendor/rem_layout/rem.js"></script>-->
<link rel="stylesheet" href="/base/normalize.less">
<link rel="stylesheet" href="/view/common/common.less">
<title> <%- title %></title>
</head>
<body>
<script src="/base/library.js"></script>
<script src="/view/common/common.pack.js"></script>
<%- content %>
</body>
</html>`
    },
    webpack: {
        devtool: 'source-map',
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
                    test: /\.less$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    // 小于 8k 的图片将以 base64 的方式嵌入在 css 中
                    loader: 'url?limit=8192&name=[path][name].[ext]'
                }
            ]
        }
    }
}


var markrun = require('markrun')
var LessPluginFunctions = require('less-plugin-functions')

fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: [
            new LessPluginFunctions()
        ]
    })
})

fis.match('*.md', {
    rExt: '.html',
    parser: function (content) {
        var html = markrun(content, conf.markrun)
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})
conf.webpack.externals = conf.webpackExternals
fis.match('{' + conf.webpackEntry.join(',') + '}', {
    parser: [
        fis.plugin('webpack', conf.webpack)
    ]
})
