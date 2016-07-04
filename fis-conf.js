var conf = {
    webpackEntry: [
        '/m/app/r.js',
        '/m/icon/r.js',
        '/m/load/r.js',

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
        <title> <%- title %> </title>
        </head>
        <body>
        <script src="/base/library.js"></script>
        <script src="/view/common/common.pack.js"></script>
        <%- content %>
    </body>
    </html>`
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
        var html = markrun(content, {
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
            template: conf.markrun.template
        })
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})
var webpackConfig = require('./webpack.config.js')
webpackConfig.externals = conf.webpackExternals
fis.match('{' + conf.webpackEntry.join(',') + '}', {
    parser: [
        fis.plugin('webpack', webpackConfig)
    ]
})
