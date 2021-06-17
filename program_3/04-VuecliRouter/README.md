# 测试vue-router

## 浏览器命令行改url

1. `location.hash='bar'`
浏览器不会请求网络

2. `location.href='bar'`
浏览器会请求网络

3. `history.pushState({},'','home')`
浏览器不会请求网络
扩展:`history.pop()`; `history.go(-1)`; `history.forward()`; 浏览器点回退

4. `history.replaceState({},'','home')`
浏览器不会请求网络

## 安装vue-router
```
npm install vue-router --save
```
我是通过`vue ui` 安装的

## 配置vue-router

<!-- 关注src/router文件夹 -->

1. router/index.js配置路由,需要导入待路由的组件,在components中.

2. main.js中也要配置router

3. App.vue(入口vue)中用关键字router-link和router-link
```
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
```
注意App.vue中无需再导入待路由的组件

## 删除url中的#符号

文件index.js:
```js
...
const router = new VueRouter({
    // 配置路由
    routes,
    mode: 'history'// 删除url处的#
})
...
```

## 更改router-link样式
App.vue: 
```html
    <router-link to="/home" tag="button">首页</router-link>
```
## 取消浏览器返回:
App.vue: 
```html
    <router-link to="/home" tag="button" replace>首页</router-link>
```

## 选中标红:

App.vue的style处:

```css
.router-link-active {
    color: red;
}
```

还有其他方式....


## 第二种方法实现router-link

button中定义方法

## 一个警告
浏览器中生成的html文件中有如下行:
```html
<noscript>
      <strong>We're sorry but vueclitest_4_router doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
```
但似乎对我并没有什么影响.


