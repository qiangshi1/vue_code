# 动态修改标题

## 第一种方法, 生命周期函数中修改document. 如About.vue的created函数. 

但该方法十分笨. 

## 第二种, 全局导航守卫. 

关注index.js的`routes`的`meta`和`router.beforeEach()`

## 另外 

###　`router.beforeEach()`是前置守卫(钩子),　当然还有后置钩子, 还有路由内的守卫, 还有组件内的守卫, 参考官网. 
