# webpack 使用plugin
1. 
增加开源协议:
webpack.config.js中:
```
...
const webpack = require('webpack')
...
plugins:[
        ...
        new webpack.BannerPlugin('All rights reserved@Shi. '),
    ]
...
```
会看到main.js.LICENSE.txt中出现了不同.

2. 
打包src/index.html文件
安装插件:`npm install html-webpack-plugin --save-dev`
修改webpack.config.js:
```
...
const HtmlWebpackPlugin = require('html-webpack-plugin')
...
plugins:[
        ...
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
...
```
会在dist中生成index.html

会以src/index.html为模板生成dist/index.html

3. 
丑化生成的文件:
安装插件:`npm install uglifyjs-webpack-plugin@1.1.1 --save-env`
修改webpack.config.js:
```
...
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
...
    plugins:[
        ...
        new UglifyjsWebpackPlugin(),
    ]
...
```
但是会报错: `[webpack-cli] TypeError: compiler.plugin is not a function`. 不过好像我的代码在使用uglifyjs-webpack-plugin之前已经被丑化了.

4. 
搭建编译服务器--好处是编译快
安装:`npm install webpack-dev-server --save-dev`
修改webpack.config.js:
```
...
module.exports={
...
    devServer: {
        contentBase: './dist',
        inline: true, //页面实时刷新
    }
}
```
package.json中配置npm run xxx:
这里可能会报错:`Error: Cannot find module 'webpack-cli/bin/config-yargs'`, 原因在与版本的不同导致package.json中要改成:`"dev": "webpack serve"`
另外要注意不要和vscode liveserver的端口冲突了.
命令行运行:
`npm run dev`
然后在修改src中的源码. 发现每次修改都会引起webpack server重新编译/页面刷新. 


