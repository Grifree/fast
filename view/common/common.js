var $ = require('jquery')
$(function () {
    var hour = new Date().getHours()
    if (hour > 18 || hour < 6) {
        // commonjs 中的选择器只允许以 #common  .common- 最为前缀
        $('#commonDemo').addClass('m-nav--night')
    }
})
