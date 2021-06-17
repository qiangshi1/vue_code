import Vue from 'vue';
// 导入本地js一定要./开头吗? 
import App3 from './app3.js';
// import App4 from './app3.js';

import App4 from './app4.vue';

const App2 = {
    template: `
    <div>
    <p>我是 Vue 的 template2! </p>
    </div>
    `,
}
const app = new Vue({
    el: '#app',
    // template的代码会替换index.html中el指定的div的内容：
    // 原： 
    // <div id="app">
    // <p>你好, 李银河! </p>  
    // </div>    
    // 被替换为： 
    // <div>
    // <p>我是 Vue 的 template! </p>
    // </div>
    
    template: `
    <div>
    <p>我是 Vue 的 template! </p>
    </div>
    `,
    data: {
        message: '你好啊, 李银河！ ',
        name: 'biqisheng'
    },
    // 如果有两个template，第二个template会替换第一个template
    // 这样的写法不必在Vue实例中写太多代码

    // <App2/>覆盖掉<div><p>我是 Vue 的 template! </p></div>
    template: '<App2/>',
    // <App3/>覆盖掉<App2/>
    template: '<App3/>',
    // <App4/>覆盖掉<App3/>
    template: '<App4/>',
    components: {
        App2,
        App3,
        App4
    } 
})