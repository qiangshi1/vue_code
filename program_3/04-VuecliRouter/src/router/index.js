//配置路由相关信息
// 1. 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'



//2. 使用
Vue.use(VueRouter)

//3. 创建对象
const routes=[
    {
        path: '',//配置默认路由
        redirect: '/home' //重定向
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
]
const router = new VueRouter({
    // 配置路由
    routes,
    mode: 'history'// 删除url处的#
})

//4. 导出
export default router

// 5. main.js中配置