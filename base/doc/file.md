# 文件规范

```
woke/
├── img/
│   ├── banner.jpg
│   └── logo.png
├── css/
|   ├── normalize.css
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

当项目越来越大文件越来越多时跨目录找HTML对应资源会很烦。

**一个『模块』的相关文件应该在一个文件夹下**

```
woke/
├── base/
│     ├── normalize.css
│     └── library.js        # 包含 jquery 等底层类库
├── vendor/                 # 第三方类库
│     └── jquery/
│           └── 2.2.4/
│               └── jquery.js
├── view/
│   ├── common/
│   │   ├── pc.css
│   │   └── pc.js
│   ├── index/
│   │   ├── index.html
│   │   ├── banner.jpg
│   │   ├── index.css
│   │   └── index.js
│   └── list/
│       ├── index.html
│       ├── index.css
│       └── index.js
```
