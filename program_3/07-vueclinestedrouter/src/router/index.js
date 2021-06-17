import Vue from 'vue'
import VueRouter from 'vue-router'
const Home= ()=> import('../components/Home.vue')
const About= ()=> import('../components/About.vue')
const HomeNews= ()=> import('../components/HomeNews.vue')
const HomeMessage= ()=> import('../components/HomeMessage.vue')


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '', 
        redirect: 'news'
      },
      {
        path: 'news', //写个相对路径
        component: HomeNews
      },
      {
        path: 'message', //写个相对路径
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router