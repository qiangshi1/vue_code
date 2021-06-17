import Vue from 'vue'
import App from './App'
// 5. main.js中配置
import router from './router'

Vue.config.productionTip = false

new Vue({
  // 5. main.js中配置
  router,
  render: h => h(App),
}).$mount('#app')
