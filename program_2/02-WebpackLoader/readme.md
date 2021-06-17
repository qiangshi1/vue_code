# webpack 加载js以外的其他文件

## 要先安装 css-loader:
```
npm install --save-dev css-loader
```

## 再配置 css-loader:
webpack.confi.js中：
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
}
```

## 再安装 style-loader:
` npm install --save-dev style-loader`

## 再配置 style-loader:
webpack.confi.js中：
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}
```
注意其中的'style-loader'

## 再安装 less-loader 和 less
` npm install --save-dev less-loader less`

## 再配置 style-loader 和 less:
更新webpack.confi.js: 
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            }
        ]
    }
}
```
好像字体的尺寸没有设置成功

## 再安装 url-loader
加载图片的。当然它本身是加载文件的，可以用来加载图片。
` npm install --save-dev url-loader`
编译的话可能会报错，由于limit导致的，还要再装一个：
`npm install --save-dev file-loader`

## 再配置 url-loader:
更新webpack.confi.js: 
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        }
                    }
                ]
            }
        ]
    }
}
```

用liveserver没有遇到老师的publicPath的问题。

## 自定义打包后的图片的名字：
更新webpack.config.js：
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            name: 'img/[name].[hash:8].[ext]',
                        }
                    },
                ]
            }
        ]
    }
}
```

## ES6转ES5
更新webpack.config.js：
### 安装babel：
`npm install --save-dev babel-loader babel-core babel-preset-es2015`
上边的命令在编译时会报错：`Error: Cannot find module '@babel/core'`
解决方法：指定babel-loader版本。https://blog.csdn.net/jiangyutongyangyi/article/details/95899501
```
npm uninstall babel-loader
npm install babel-loader@7.1.5
```
### 配置babel：
更新webpack.config.js：
```
const path=require('path')
module.exports={
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            name: 'img/[name].[hash:8].[ext]',
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    },
                ]
            }
        ]
    }
}
```

但为什么我的打包之后的js代码不是很整齐？


