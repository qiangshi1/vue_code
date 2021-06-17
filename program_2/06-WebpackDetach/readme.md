# webpack 抽离开发期和发布期等的webpack.config.js的配置

1. 安装webpack-merge
`npm install webpack-merge --save-dev`

2. 在build文件夹里配置多个config.js
我这里演示的开发和发布期的不同在于:

i: 开发和发布的main.js.LICENSE.txt不同
也就是这块:
```
plugins:[
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('All rights reserved@Shi. '),
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    // new UglifyjsWebpackPlugin(),
],
```
ii: 开发期有devServer, 发布期没有. 

3. 配置package.json:
```
"scripts": {
    "build": "webpack --config ./build/prod.config.js",
    "dev": "webpack --config ./build/dev.config.js",
    "server": "webpack serve --config ./build/dev.config.js"
},
```


4. 其他问题

并没有遇到老师的打包到错的路径的问题, 可能哪个地方配置得和老师的不一样. 