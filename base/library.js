window.__YOU_NEED_REQUIRE_USE_MODULE = {}
__inline('../vendor/jquery/1.12.3/jquery.min.js')
__inline('../vendor/react/0.14.8/react.js')
__inline('../vendor/react/0.14.8/react-dom.min.js')

;(function () {
    // 将执行的全局变量赋值到 window.__YOU_NEED_REQUIRE_USE_MODULE
    // 目的是强制使用者引用所有模块均要使用 require 或 import
    var globalVariables = ['$', 'jQuery', 'React', 'ReactDOM']
    var i = 0;
    for (;i < globalVariables.length; i++) {
        var variableName = globalVariables[i]
        window.__YOU_NEED_REQUIRE_USE_MODULE[variableName] = window[variableName]
        window[variableName] = null
    }
})();
