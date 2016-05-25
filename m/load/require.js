var loading = require('./index')
window.require = function (path) {
    var output
    if(!/\.js&/.test(path)) {
        path = path + '.js'
    }
    switch (path) {
        case './index.js':
            output = require('./index')
        break
    }
    return output
}
