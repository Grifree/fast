__inline('./vendor/jquery/1.12.3/jquery.min.js')
__inline('./vendor/react/0.14.8/react.js')
__inline('./vendor/react/0.14.8/react-dom.min.js')

;(function (globalVariable) {
    var variableName
    var i
    window.__WOKE_EXTERNALS_ = window.__WOKE_EXTERNALS_ || {}
    for (i = 0; i < globalVariable.length; i++) {
        var variableName = globalVariable[i]
        window.__WOKE_EXTERNALS_[variableName] = window[variableName]
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
