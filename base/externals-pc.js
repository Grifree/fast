__inline('/node_modules/jquery/dist/jquery.min.js')
__inline('/node_modules/react/dist/react.min.js')
__inline('/node_modules/react-dom/dist/react-dom.min.js')

;(function (globalVariable) {
    var variableName
    var i
    window.__FAST_EXTERNALS_ = window.__FAST_EXTERNALS_ || {}
    for (i = 0; i < globalVariable.length; i++) {
        var variableName = globalVariable[i]
        window.__FAST_EXTERNALS_[variableName] = window[variableName]
        window[variableName] = null
    }
})(
    [
        'jQuery',
        '$',
        'React',
        'ReactDOM'
    ]
)
