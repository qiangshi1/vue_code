// 导入
import {hong_flag} from "./js2_hong.js"
var name='小明';
var flag=true;

console.log("In js3_ming: "+hong_flag);


// default的导入,sheis_honghong是重命名之后的im_honghong
import sheis_honghong from "./js2_hong.js";

// 测试有问题，有变量，但变量值错误
console.log("In js3_ming: "+sheis_honghong);

// 全部导入,打包成一个all对象
import * as all from "./js4_qian.js";
console.log(all);
