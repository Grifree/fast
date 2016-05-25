window.__YOU_NEED_REQUIRE_USE_MODULE = {}
__inline('../vendor/jquery/1.12.3/jquery.min.js')
window.$ = null;
__inline('../vendor/classnames/2.2.3/index.min.js')
__inline('../vendor/react/0.14.8/react.js')
__inline('../vendor/react/0.14.8/react-dom.min.js')

;(function () {
    var globalVariables = ['jQuery','React','ReactDOM','classNames']
    var i = 0;
    for (;i < globalVariables.length; i++) {
        var variableName = globalVariables[i]
        window.__YOU_NEED_REQUIRE_USE_MODULE[variableName] = window[variableName]
        window[variableName] = null
    }
})();
