// webpack识别导入，查找文件
// commonJS的模块化
const {add, muti}=require('./algrithm.js')
console.log(add(1,2))

// ES6的模块化
import {height} from "./info.js"
console.log(height)
