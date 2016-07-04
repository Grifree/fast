module.exports = {
    devtool: 'source-map',
    externals: {
        // var $ = require('jquery') 等于 var $ = window.jQuery
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
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
};
