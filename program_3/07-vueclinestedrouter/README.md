# 路由的嵌套

## 1. 定义子组件HomeMessage.vue和HomeNews.vue

## 2. router/index.js 中写children

## 3. Home.vue(被嵌套的组件)中写<router-link>和<router-view>


# 配置默认路由

## 1. router/index.js 中写redirect

# 记忆上次嵌套的路由状态的方法(老师隔了好几个P才讲到)

1. App.vue中`<keep-alive>`
2. Home.vue中写生命周期函数: `activated()` `beforeRouteLeave()`
3. 可能会遇到一个问题: `Avoided redundant navigation to current location: "/XXX"`, 解决方法为index.js中加上: 
    ```js
    // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
    const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
    }
    // 参考: https://blog.csdn.net/cll1224666878/article/details/107062586
    ```

# 另外

`<keep-alive>`可以配置`exclude`, 