# vuex的state/getters/mutations/actions/mudules

## state单一状态树
- vuex推荐一个系统中只用一个store. 
- state中的量是响应式的
- `state.sporters['address']='beijing'`新增键值对不会响应, `Vue.set(state.sporters, 'address', 'nanjing');`新增键值是响应的
-  用`Vue.delete(state.sporters, 'address', 'nanjing');`删除是响应式的

## getters
- 在getters中可以调用其他getters.
- 可以返回一个函数.

## mutations
- mutations可以往后加参数, 后加参数称之为payload(荷载).
- mutations的另一个提交风格:
    ```js
    addCounter2(num) {
        this.$store.commit({
        type:　'incrementCount',
        num
        });
    } //但我还是没有摸通! 
    ```
- App.vue中可以用常量代替字符串, 未演示! 
- mutations中不推荐用异步操作.  

## actions
- 推荐在actions执行异步操作. 
- actions 函数可以传值 函数 对象. 
- promise的跨函数用法: 关注App.vue的`updateInfo()`和index.js的`actionUpdateInfo`

## modules
- 用以解决单一状态树的不足. 
- modules是store下边的store. 
- modules的getters mutations actions可以直接使用, 不用套娃, 重命名怎么办? 
- 子对象actions中的context属于子对象
- store推荐的目录结构: 
```
store
├── state.js // state推荐不抽离, 但是也可以抽
├── getters.js
├── mutations.js
├── actions.js
└── modules
    ├── modulesA.js 
    └── modulesB.js
```