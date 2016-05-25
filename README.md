# nice

> The front-end integration solutions
> 前端集成解决方案

## 下载与安装

```shell
git clone https://github.com/nimojs/webs/archive/master.zip
cd webs
npm i fis3 -g
npm i webpack -g
npm i nodemon -g
## 如果你全局安装过 node-sass 就不要装了（因为安装太慢了）
npm i node-sass -g
npm install
## 建议使用 cnpm 按照模块
```

## 启动

```shell
# 必须先运行 webpack
npm run webpack
npm run fis
npm run mobe
```
http://127.0.0.1:9080/view/demo/index.html


## 目录说明

```
- base                  # HTML标签样式标准化、SASS工具库、底层JS库
- m (module)            # 模块代码
- view                  # 页面业务逻辑代码
- view/commmon          # 业务逻辑公用代码
- fis-conf.js           # fis3 配置
- webpack.config.js     # webpack 配置
- mobe.js               # mobe 配置
```

## 入口

每次新建 `view/[name]/index.js` 或者 `m/[name]/require.js` 都需要在 `webpack.config.js` 中添加入口

## rem

如果你要使用 rem 方案请确保 `commmon/head1.html` 中的 `<head>` 部分引入了 `vendor/rem_layout/rem.js`

`/base/_rem.scss` 中默认设置了设计稿 640，可根据实际情况调整这个值。

### 使用计算方法

```scss
// view/demo/index.scss
@import "../../base/_rem";

.mobile {
    width:rem(450);
}
.mobile-title {
    width: rem(300);
}
```
