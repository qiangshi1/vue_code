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


const ins = axios.create({
  url: '/',
});
// 1. 请求拦截器, 若请求不符合规则, 拦截
ins.interceptors.request.use(config=>{
  console.log(config.data);
  return config;  //添加这一行, 不然会报错: https://blog.csdn.net/qq_37939251/article/details/105708998
}, err=>{
  console.log(err.data);
});

ins.get('/', {
  params: {
    // tn: 'news',
    tn: '80035161_1_dg'
  }
}).then(res => {
  console.log(res.data);
});

// 2. 响应拦截器, 过滤结果