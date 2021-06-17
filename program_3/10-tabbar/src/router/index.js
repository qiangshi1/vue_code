import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const Home= ()=> import('../views/home/Home.vue')
const Items= ()=> import('../views/items/Items.vue')
const Mine= ()=> import('../views/mine/Mine.vue')
const Shopping= ()=> import('../views/shopping/Shopping.vue')


const routes = [
  {
    path: '',
    redirect: 'home',
    
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '/items',
    component: Items,
    meta: {
      title: 'items'
    }
  },
  {
    path: '/shopping',
    component: Shopping,
    meta: {
      title: 'shopping'
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      title: 'mine'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
// // 前置守卫
// router.beforeEach((to, from, next) => {
//   document.title=to.matched[0].meta.title;
//   // console.log(to);
//   next();
// })
// // 后置钩子
// router.afterEach((to) => {
//   console.log(to);
// })
// const VueRouterPush =VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }
export default router
