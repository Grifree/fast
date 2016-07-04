# woke

- [模块索引](./m/README.md)

> The front-end integration solutions
> 前端集成解决方案

## 下载与安装

```shell
# git clone 或者浏览器打开zip链接
git clone https://github.com/nimojs/woke/archive/master.zip
cd woke
```

```shell
# fis3 webpack nodemon 安装速度较慢，请耐心等待（但只需要在全局安装一次）
sudo npm i fis3 -g
sudo npm i webpack -g
sudo npm i nodemon -g

# 安装非全局依赖
npm i
```

## 启动

```shell
npm run woke
npm run mobe
```
http://127.0.0.1:2000/view/demo/index.html


## 目录说明

```
- base                  # HTML标签样式标准化、less 工具库、底层JS库
- m (module)            # 模块代码
- view                  # 页面业务逻辑代码
- view/commmon          # 业务逻辑公用代码
- fis-conf.js           # fis3 配置
- webpack.config.js     # webpack 配置
- mobe.js               # mobe 配置
```

## 入口

每次新建 `view/[name]/index.js` 或者 `m/[name]/require.js` 都需要在 `fis-conf.js` `webpackEntry` 中添加入口

### m/[name]/require.js

require.js 是为了配合 README.md 引入模块

## rem

如果你要使用 rem 方案请确保 `commmon/head1.html` 中的 `<head>` 部分引入了 `vendor/rem_layout/rem.js`

`/base/_rem.scss` 中默认设置了设计稿 640，可根据实际情况调整这个值。

### 使用计算方法

```scss
// view/demo/index.scss
@import "../../base/func";

.mobile {
    width:rem(450);
}
.mobile-title {
    width: rem(300);
}
```
## js-inline-style

项目中在 js 内嵌 css 均使用如下方式

> 因为构建工具使用的是 fis ，为了支持文件 hash 。非第三方库的样式均使用 `__css("path")` 引入

```js
// index.js
__css('./index.scss')
```

最终会被编译成

```js
;(function (content) {
  var head = document.getElementsByTagName("head")[0] || document.documentElement;
  var sty = document.createElement("style");
  sty.type = "text/css";
  // IE
  if (sty.styleSheet) {
    sty.styleSheet.cssText = content;
  } else {
    sty.innerHTML = content;
  }
  head.appendChild(sty);
})("body {font-size:12px;}");
```

webpack 的 `require('./a.scss')` 方式只在使用第三方库样式时使用，例如：

```js
require('rc-select/assets/index.less')
const Select = require('rc-select')
```
