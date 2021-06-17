const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry: './src/js/main.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
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
              test: /\.vue$/,//正则匹配.vue文件
              use: [
                {
                    loader: 'vue-loader'
                }
            ]
            }
        ]
    },
    resolve: {
        //导入模块简写省略指定后缀
        extensions: ['.js', '.css', '.vue'],
        // alias:别名
        alias: {
        //指定vue使用vue.esm.js
        'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}

