# webs

> Web Solution

## 下载与安装


```shell
git clone https://github.com/nimojs/webs/archive/master.zip
cd webs
npm i fis3 -g
npm i webpack -g
npm i static-server -g
npm install
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
- c (common)            # 公用代码
- m (module)            # 模块代码
- view                  # 页面业务逻辑代码
- fis-conf.js           # fis3 配置
- webpack.config.js     # webpack 配置
- mobe.js               # mobe 配置
```
