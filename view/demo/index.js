// 所有模块均使用 require 引用
// npm install 安装的模块直接引用模块名
var $ = require('jquery')
// 项目中的模块使用相对路径
var loading = require('../../m/loading/')
$(function () {
    // 不允许直接选择 $('.main') 而是使用 .js- 前缀选择
    // 虽然 .js- 是 class 但绝不允许在 css 中定义 .js- 前缀的样式
    var $main = $('.js-main')
    // [name]--[status] 是 css 状态的命名方式
    $main.addClass('main--on')

    // ID 一律大写，这样可以通过变量名区分选择的是 class 还是 id
    // $loadingBtn = $('.js-loading-btn')
    // $LoadingBtn = $('#LoadingBtn')
    var $LoadingBtn = $('#LoadingBtn')
    $LoadingBtn.on('click', function () {
        loading.show()
        setTimeout(function () {
            loading.hide()
        }, 1000)
    })
})
