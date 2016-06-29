var $ = require('jquery')
$(function () {
    // view/url/*.js 中的选择器只允许使用 "#" 和 ".js-" 作为前缀
    // 绝对不允许使用 input[name='some'] 选择器
    $('.js-tag .tag-item-remove').on('click', function () {
        var $this = $(this)
        $this.closest('.js-tag').remove()
    })
})
__css('./index.scss')
