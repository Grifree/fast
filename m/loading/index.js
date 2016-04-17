var $ = require('jquery')
require('./index.scss')
var loading = {
    _$dom: false,
    step: function () {
        if (!this._$dom) {
            var loadinghtml = `
                <div class="m-loading">
                    <span class="m-loading-cnt">Loading</span>
                </div>
            `
            this._$dom = $(loadinghtml)
            $('body').append(this._$dom)
        }
    },
    show: function () {
        this.step()
        this._$dom.addClass('m-loading--show')

    },
    hide: function () {
        this.step()
        this._$dom.removeClass('m-loading--show')
    }
}
module.exports = loading
