var markrun = require('markrun')
fis.match('*.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass')
})

fis.match('*.md', {
    rExt: '.html',
    parser: function (content) {
        var html = markrun(content, {
            type: {
                js: function (source) {
                    var result = babel.transform(source, {
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
            template:
            `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="renderer" content="webkit">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" ></meta>
            <link rel="stylesheet" href="/base/normalize.scss">
            <link rel="stylesheet" href="/view/common/common.scss">
            <title> <%- title %> </title>
            </head>
            <body>
            <script src="/base/library.js"></script>
            <script src="/view/common/common.pack.js"></script>
            <%- content %>
        </body>
        </html>`
        })
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})
