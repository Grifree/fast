# react 模块示例

<script src="./r.js"></script>

<div id="demo"></div>

````js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './index'

let data = [
    'html',
    'css',
    'js'
]
ReactDOM.render(<App data={data} />, document.getElementById('demo'))
````
