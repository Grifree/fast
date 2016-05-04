# CSS 规范

## 命名规范

### 模块 `/m/`

````html
<!-- 基础样式 -->
<div class="m-box">
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
````
