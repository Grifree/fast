window.require = function (path) {
    var output
    switch (path) {
        case './index':
        case './index.js':
            output = require('./index')
        break
    }
    if (!output) {
        throw new Error('not find ' + path)
    }
    return output
}
