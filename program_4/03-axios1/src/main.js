import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 1. axios的第一种写法
// axios({
//   method: 'get', //默认是get方法, 所以这个字段可以省略, axios暂不支持post请求
//   // 老师的网站不能上了, 百度
//   // 在vue.config.js中配置
//   url: '/'
// }).then(res =>{
//   console.log(res);
// })

// 2. axios的第二种写法
// axios.get('/').then(res =>{
//   console.log(res);
// })

// params
// axios({
//   method: 'get', 
//   url: '/',
//   params: { //加上params会拼接到url后面
//     tn: '80035161_1_dg'
//   }
// }).then(res =>{
//   console.log(res);
// })

// 3. 两个axios并发请求

// axios.all([
//   axios({
//     url: '/',
//   }),
//   axios({
//     url: '/',
//     params: { //加上params会拼接到url后面
//       tn: '80035161_1_dg'
//     }
//   })
// ]).then(res =>{
//   console.log(res);
// })
// 当然axios还有其他的变形

// 4. 上边是axios的全局写法, 现写axios的实例写法
const ins1 = axios.create({
  url: '/',
});
ins1.get('/').then(res => {
  console.log(res);
});