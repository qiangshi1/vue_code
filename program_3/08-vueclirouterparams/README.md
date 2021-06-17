# 路由的参数传递问题

## 第一种方法 params

也就是动态路由的方式

关注App.vue的`userId_in_app_vue`, router/index.js的`userId_in_index_js`, components/User.vue的`userId_in_user_vue`

## 第二种方法 query

关注App.vue的: `<router-link :to="{path: '/profile', query: {q_name: 'q', q_age: 18}}">Profile</router-link>` 和components/Profile.vue的`{{$route.query}}`

另外query是一种标准url: `http://192.168.1.5:8080/profile#/profile?q_name=q&q_age=18`

## 另外: 

### 一般大数据用query, 小数据用params. 

#### this.$route和this.$router是不一样的, 关注App.vue中的两个生命周期函数created和updated. 


#### 为什么会有this.$route和this.$router, vue原型中有. 可以通过vue.prototype.xxx在vue原型中注册方法. 