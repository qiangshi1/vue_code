import Vue from 'vue'
import VueRouter from 'vue-router'
// 非路由懒加载模式
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// 路由懒加载模式
const Home= ()=> import('../components/Home.vue')
const About= ()=> import('../components/About.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
