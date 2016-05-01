var $ = require('jquery')
$(function () {
    // commonjs 中的选择器只允许以 #common  .common- 最为前缀
    $('#commonDemo').on('click', function () {
        $(this).toggleClass('m-demo--night')
    })
})
