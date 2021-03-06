var conf = {
    // require 被替换的全局变量
    webpackExternals: {
        // var $ = require('jquery') 等于 var $ = window.__FAST_EXTERNALS_.jQuery
        'jquery': '__FAST_EXTERNALS_.jQuery',
        'react': '__FAST_EXTERNALS_.React',
        'react-dom': '__FAST_EXTERNALS_.ReactDOM'
    },
    // markdown 可运行代码的配置模板
    markrun: {
        lang: {
            js: function (source) {
                var result = require('babel-core').transform(source, {
                    presets: [
                         "es2015"
                    ],
                    plugins: [
                       ["transform-react-jsx", {pragma: 'require("react").createElement'}],
                       "transform-flow-strip-types",
                       "syntax-flow",
                       "syntax-jsx",
                       "transform-react-display-name",
                       "transform-decorators-legacy",
                       "transform-class-properties"
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
<!--<script src="/base/rem.js"></script>-->
<link rel="stylesheet" href="/view/pc/common/index.less">
<title> <%- title %></title>
</head>
<body>
<script src="/base/externals-pc.js"></script>
<%- content %>
</body>
</html>`
    },
    // webpack 的配置
    webpack: {
        devtool: 'source-map',
        externals: '不要在这里配置全局变量替换 require 通过 webpackExternals 配置,',
        module: {
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
                        presets: [
                             "es2015"
                        ],
                        plugins: [
                           ["transform-react-jsx", {pragma: 'require("react").createElement'}],
                           "transform-flow-strip-types",
                           "syntax-flow",
                           "syntax-jsx",
                           "transform-react-display-name",
                           "transform-decorators-legacy",
                           "transform-class-properties"
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    loader: "style!css"
                },
                {
                    test: /\.less$/,
                    loader: "style!css!less"
                }
            ]
        }
    }
}



var LessPluginFunctions = require('less-plugin-functions')
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: [
            new LessPluginFunctions()
        ]
    })
})

var markrun = require('markrun')
fis.match('*.md', {
    rExt: '.html',
    parser: function (content) {
        var html = markrun(content, conf.markrun)
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})

conf.webpack.externals = conf.webpackExternals
fis.match('{/view/**/*.js,/m/**/r.js}', {
    parser: [
        fis.plugin('webpack', conf.webpack),
        fis.plugin('inlinecss')
    ]
})



fis.match('{package.json,mobe.js,fis-conf.js,/node_modules/**}', {
    release: false
})

fis.media('qa').match('**/README.html', {
  release: false
});

fis.media('qa').match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.media('qa').match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.media('qa').match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
// 发布时非 html 资源都进行 hash 处理
fis.media('qa').match('*', {
  useHash: true
});
fis.media('qa').match('*.html', {
  useHash: false
});
