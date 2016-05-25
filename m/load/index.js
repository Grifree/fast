var $ = require('jquery')
require('./index.scss')
var load = {
    _$dom:false,
    step: function () {
        if (!this._$dom) {
            var loadhtml = `
                <div class="m-load">
                    <span class="m-load-icon"></span>
                </div>
            `
            this._$dom = $(loadhtml)
            $('body').append(this._$dom)
        }
    },
    show: function () {
        this.step()
        this._$dom.addClass('m-load--show')

    },
    hide: function () {
        this.step()
        this._$dom.removeClass('m-load--show')
    }
}
module.exports = load
