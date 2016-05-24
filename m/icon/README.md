# icon

- [索引](./demo.html)

> 不要 @import iconfont.css 和直接在 view 中使用 .icon-name ，除非你想被开除。

## 图标来源和维护

图标使用 http://iconfont.cn/ 生成，当设计在 iconfont 更新图标后，需将新的图标文件下载至本目录。并将新增图标按照 `index.scss` 已有格式添加


## 使用图标

```scss
// view/demo/index.scss
@import "../../m/icon/index";
.tag-item-remove {
    color:red;
    cursor: pointer;
    @extend %icon-remove;
}
```
