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
  },
  {
    path: '/user/:userId_in_index_js',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
