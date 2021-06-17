# 封装tabbar----router的案例学习

# 另外----路径文件别名
App.vue中:
```js
<img src="./assets/img/tabbar/home_unfocused.svg" alt="" slot="item-icon"/>
```
等价于:
```js
<img src="@/assets/img/tabbar/home_unfocused.svg" alt="" slot="item-icon"/>
```
`@`在隐藏的配置文件中, 表示src目录

当然自己也可以写其他的别名, 本代码没有演示该功能, 有机会再关注吧. 


