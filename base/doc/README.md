# 如何建立前端集成解决方案

Nimo 进入了一家新公司任职前端工程师，这家公司的之前完全没有前端解决方案。

前端 Judy 向 Nimo 提出几个问题希望 Nimo 能建立一个前端集成解决方案解决这些问题。


1. **易维护的目录结构**：`css` `js` `img` `html` 文件混乱难以维护
2. **多端支持**：一个项目会分移动端和PC端。维护多个 GIT/SVN 很麻烦，希望能都在一个代码仓库维护。
2. **CSS命名规范**：没有命名规范，多人维护经常出现样式冲突。
3. **JS选择器规范**：维护他人代码时候不敢随便改 `class` 担心这个 `class` 与 `js` 有关
4. **模块化开发**：能像 nodejs 一样模块化开发 js, css 也需要模块化开发。要支持 React 的 jsx。
5. **打包压缩**：CSS JS IMG 都要能支持压缩合并，加载速度很重要！
6. **发布时清除缓存**：每次新版本发布后用户还是访问缓存中老的静态资源，导致页面功能失效。
7. **数据模拟**：需要能模拟 AJAX 和 PHP模板渲染，前端能在本地直接写后端模板引擎（不想将HTML交给后端改成PHP模板）。


## 易维护的目录结构

先从易维护的目录结构下手。先看下以前项目的目录结构都是怎么样的：

```
woke/
├── img/
│   ├── banner.jpg
│   └── logo.png
├── css/
|   ├── reset.css
│   ├── common.css
│   ├── list.css    
│   └── index.css   
├── js/
│   ├── jquery.js
│   ├── common.js
│   ├── index.js
│   └── list.js
├── index.html
└── list.html
```

`index.html`关联文件有 `css/index.css` `js/index.js` `img/banner.jpg`。修改 `index.html` 时需要打开3个目录修改文件。

当项目文件越来越多时跨目录找HTML对应资源会很烦。

按照**相关文件在一个文件夹就近维护**的思路调整目录结构

```
woke/
├── base/
│     ├── normalize.css
│     └── library.js
└── view/
    ├── common/
    │   ├── pc.css
    │   └── pc.js
    ├── index/
    │   ├── index.html
    │   ├── banner.jpg
    │   ├── index.css
    │   └── index.js
    └── list/
        ├── index.html
        ├── index.css
        └── index.js
```


### view/index

`index.html` `list.html` 分别放在了 `view/index` `view/list` 相关联的文件也在同一个目录下。每次维护首页或列表页只需要打开一个文件夹。

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <link rel="stylesheet" href="/base/normalize.css">
    <link rel="stylesheet" href="/view/common/pc.css">
    <link rel="stylesheet" href="/view/index/index.css">
</head>
<body>

<script src="/base/library.js" ></script>
<script src="/view/common/pc.js" ></script>
<script src="/view/index/index.js" ></script>
</body>
</html>
```

都写绝对路径 `/base/normalize.css` 而不是 `../../base/normalize.css` 是因为后续会使用 [fis3](http://fis.baidu.com/) 构建项目。

## base/

`css/reset.css` 改为 `base/normalize.css` [Normalize.css 与传统的 CSS Reset 有哪些区别？](https://www.zhihu.com/question/20094066)

`js/jquery.js` 改为 `base/library.js` 里面包含 jquery 等基础类库

在 `base/` 中只存放基础类库代码，绝对不允许出现业务逻辑代码。例如在 `library.js` 中写 点击按钮返回头部  
点击按钮返回头部的这种公用业务逻辑代码应该写在 `view/common/pc.js` 中

### view/common

`css/common.js` `js/common.js` 被改成了 `view/common/pc.css` `view/common/pc.js`。view = 业务逻辑 ， coommon = 公用 ， pc = 电脑端。后续要做移动端就增加一个 `/view/common/mobile.css`。需要做活动专题系列页面就增加 `/view/common/events.css`
