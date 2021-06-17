# webpack 使用vue2
1. 
一般开发中只有一个html: index.html,
其他的html代码一般在js的vue实例中写模板
2. 
但在vue实例中写template代码会很繁杂! 解决方法: 组件化: template + components
3. 
进一步地，可以把template的代码新建文件 app2.js
4. 
安装vue-loader和vue-template-compiler
`npm install --save-dev vue-loader vue-template-compiler`
更新：webpack.config.js
```
...
{
              test: /\.vue$/,//正则匹配.vue文件
              use: {
                loader: 'vue-loader'
              }
            }
...
```
5. 
可能出现的问题  
  - 提示没有webpack, 重新安装webpack(老师未提到):`npm install webpack --save-dev`
  - 提示vue-loader was used without the corresponding plugin(老师提到的), 解决方法1: 安装插件, 可以参考https://www.cnblogs.com/planetwithpig/p/11904159.html; 解决方法2: 使用低版本vue-loader,在package.josn中`"vue-loader": "^13.0.0",`, 再执行命令`npm install`,老师是这样做的,但是我还是报错.
  我用的解决方法1, 可以解决. 
6. 
当然还可以组件中套组件. 
7. 
导入模块简写省略指定后缀: webpack.config.js中:
`extensions: ['.js', '.css', '.vue'],`





