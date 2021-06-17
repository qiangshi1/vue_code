import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const ShoppingCart = () => import('views/shoppingcart/ShoppingCart')
const Detail = () => import('views/detail/Detail')
Vue.use(VueRouter)
const routes = [
    {path: '', redirect: 'home',},
    {path: '/home', component: Home, meta: {title: 'home'}},
    {path: '/category', component: Category, meta: {title: 'category'}},
    {path: '/profile', component: Profile, meta: {title: 'profile'}},
    {path: '/shoppingcart', component: ShoppingCart, meta: {title: 'shoppingcart'}},
    {path: '/detail/:iid', component: Detail, meta: {title: 'detail'}},
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router