# CSS 规范

## 命名规范

### 模块 `/m/`

````html
<h2>基础</h2>
<div class="m-box">
    <div class="m-box-hd">
        <span class="m-box-hd-title">title</span>
    </div>
    <div class="m-box-bd">
        text
    </div>
</div>

<h2>高亮</h2>
<div class="m-box m-box--on">
    <div class="m-box-hd">
        <span class="m-box-hd-title">title</span>
    </div>
    <div class="m-box-bd">
        text
    </div>
</div>
````

````css
/* 模块代码均以 .m- 作为前缀 */
.m-box {
    border: 1px solid #CCC;
    background-color: #EEE;
}
.m-box-hd {
    line-height: 30px;
    border-bottom:1px solid #CCC;
}
/* .m-{模块名}-{子元素}-{子元素} */
.m-box-hd-title {
    font-size: 28px;
}
.m-box-bd {
    font-size: 12px;
    background-color: white;
}
/* .m-{模块名}--{状态} */
html .m-box--on {
    border-color:orange;
    background-color: #FFF1D9;
}
html .m-box--on .m-box-hd {
    border-bottom-color: orange;
}
/* 选择器前加 html 是为了提高状态的CSS权重 */
````
