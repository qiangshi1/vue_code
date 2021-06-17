import Vue from 'vue'
import VueRouter from 'vue-router'
const Home= ()=> import('../components/Home.vue')
const About= ()=> import('../components/About.vue')
const User= ()=> import('../components/User.vue')
const Profile= ()=> import('../components/Profile.vue')
const HomeNews= ()=> import('../components/HomeNews.vue')
const HomeMessage= ()=> import('../components/HomeMessage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'home',
    // meta: {
    //   title: 'home'
    // }
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
    ],
    // meta: {
    //   title: 'home'
    // }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'about'
    }
  },
  {
    path: '/user/:userId_in_index_js',
    component: User,
    meta: {
      title: 'user'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'profile'
    }
  }
]

const router = new VueRouter({
  routes
})
// 前置守卫
router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title;
  // console.log(to);
  next();
})
// 后置钩子
router.afterEach((to) => {
  console.log(to);
})

export default router
