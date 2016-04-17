var $ = require('jquery')
var loading = require('../../m/loading/')
$(function () {
    var $main = $('.js-main')
    $main.addClass('main--on')

    var $LoadingBtn = $('#LoadingBtn')
    $LoadingBtn.on('click', function () {
        loading.show()
        setTimeout(function () {
            loading.hide()
        }, 1000)
    })
})
