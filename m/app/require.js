var loading = require('./index')
window.require = function (path) {
    var output
    switch (path) {
        case './index':
        case './index.js':
            output = require('./index')
        break
        case 'jquery':
            output = require('jquery')
        break
        case 'react':
            output = require('react')
        break
        case 'react-dom':
            output = require('react-dom')
        break
    }
    if (!output) {
        throw new Error('not find ' + path)
    }
    return output
}
