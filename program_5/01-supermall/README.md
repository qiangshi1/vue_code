# 01-supermall----购物APP(仿蘑菇街)综合开发

## 目录结构划分

```tree
├── assets  //文件夹, 放css, img文件
│   ├── css //文件夹, 放css文件
│   └── img //文件夹, 放img文件
├── common //文件夹, 放一些常量, 工具函数
│   ├── const.js //文件, 放常量
│   └── utils.js //文件, 放工具文件
├── components //文件夹, 放小型的/可复用的组件
│   ├── common //文件夹, 可复用的组件
│   └── content //文件加, 放本项目的组件
├── network //文件夹, 放网络请求文件
├── router //文件夹, 放路由的配置文件
├── store //文件夹, 放vuex文件
├── views //放大的组件
├── App.vue //文件, vue入口
└── main.js //文件, js入口
```

## css/normalize.js文件用以统一不同浏览器的默认样式----https://github.com/necolas/normalize.css


## 导入文件的别名----在vue.config.js中配置alias
- 注意别名的声明和使用

## 一般一个项目中有一个.editorconfig文件, 统一源码格式. vue-cli创建项目默认没有这个文件

## tabbar(底部导航栏)在program_3/10-tabbar中已经写了, 可以直接导入, 无需再写
- 复制到compoments/common下
- 我的program_3/10-tabbar项目没有好好抽离, 这里做一些必要的修改

## 安装vue-router
```shell
npm install vue-router --save
```

## 更改图标----标签栏处

public/index.html中, 关注这一行
```html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```
更换favicon.ico即可. 不过图片格式好像不能是矢量图

## 标签栏(tabbar)

## 封装一个navbar(顶部导航栏)

## 安装axios

```shell
npm install axios --save
```

## 轮播图
- bannners是轮播图的意思
- 老师并未讲授代码, 我是从网上直接下的----https://github.com/maclxf/supermall/blob/master/src/components/common/swiper/
- 用https://github.com/maclxf/supermall/blob/master/src/components/common/swiper/这个轮播图会报错, 要加key, 同样在https://github.com/maclxf/supermall/blob/master/src/components/common/swiper/中可以找到加key的方法. 
- 轮播图的抽离

## 推荐栏
- v-for 有时会报错----必须加key, 网上有很多相关的帖子

## 本周流行
- 图片+链接

## tabcontrol(流行/新款/精选切换栏)
- 它会被复用, 所以放在components/common下
- 关注css样式`position: sticky; top: 44px;`的作用
- css样式`z-index: 9;`(虽然不知道那个9是啥)可以实现元素的堆叠, 在tabcontrol和navbar中都有用到. 对于tabcontrol, `z-index: 9;`在TabContrl.vue `.tab-control`处配置; 对于navbar, `z-index: 9;`在Home.vue `.home-nav-bar`处配置. 

## 商品(goods)
- 大数据的加载模式----滑动动态加载
- 写js代码还是要考虑异步执行的逻辑设计
- css还要专门学啊

## 优化移动端浏览器滚动问题(解决卡顿问题)
- iscroll(github上有)可以用于优化浏览器滚动, 但是
- better-scroll(github上也有)也可以, better-scroll还在更新, 推荐用better-scroll
- better-scroll重点解决移动端的卡顿问题, 也可以用于桌面端. 
- 但我测试下用原声滚动移动端也挺顺滑的, 我的机型是华为mate20 pro. 难道是近几年手机性能好了? 

## 使用better-scroll
- 安装better-scroll: `npm install better-scroll --save`
- 然后可以参考项目02-betterscroll进行配置
- better-scroll的抽离
- 在Home.vue中使用better-scroll时(抽离到Scroll.vue中去了), 可能会出现无法滚动的问题, 有博客说这是待滚动的元素刷新尺寸太慢了(需要请求网络数据)就会有这个问题, 一种解决方法是(参考https://www.cnblogs.com/hellowoeld/p/14082315.html)在Scroll.vue的`this.bscroll.on('pullingUp', ...`处加上一行代码: `this.bscroll.refresh();` , 来让尺寸能够刷新. 实验结果是可以的, 但又会出现一个新的问题: 上拉有弹簧效果, 下拉的弹簧效果消失. ----老师在P173处讲到了, 解决思路是只要有一张图片加载完成就执行refresh(). 
- vue中的@load可以监听图片是否加载完成
- 事件总线$bus可以发射事件, 涉及代码: main.js Home.vue GoodsListItem.vue.
- 逻辑与可以防止某些bug, 如Scroll.vue处写的: `this.bscroll && this.bscroll.scrollTo(x, y, time);`
- 生命周期函数: created期间某些组件可能未加载, 如果强行调用某些函数可能会报错. 
- 防抖函数: https://mp.weixin.qq.com/s?src=11&timestamp=1622766157&ver=3109&signature=9wD5zZ184zO7P3FaAr14hb5GnuGEL*DHl*H0ByCJIywH6BczNKp6K4kuy1*S-K7txG05AzxXtWgwJDaJ*Xm7SQH1JbeBY6fyihtwk0iNFZ-6WPorzyfnXDK1TiGJDyVe&new=1
- 一但闭包, 变量就不会被销毁了.
- 防抖函数也可以参考这个视频https://www.bilibili.com/video/BV184411q7sa?from=search&seid=14980664329297736703, 我的实现参考这个视频, 和老师的实现稍微有点区别. 
- 防抖函数最后抽离到utils.js中去了. 

## 流行 新款 精选的吸顶效果
- $el 拿组件里的元素
- @load 判断元素是否加载完(自定义元素不支持?)
- 用两个样子相同的元素可以实现很酷炫的动画效果, 双胞胎戏法? 

## 切换页面原页面状态驻留
- 一个效果是: 其他页面切home, home状态不变. 
- 1. 用<keep-alive>, 在App.vue中修改
- 2. 通过生命周期函数deactived, 保存better-scroll滑动的状态, 在Home.vue中修改. 
- 3. 在生命周期函数deactived中写一个`this.$refs.scroll.refresh();`, 这是防止某些BUG(返回后home无法再刷新)


##　backtop
- 一键返回顶部
- 自定义的组件可能无法支持点击, 加上`.native`可以突破此限制: `@click.native="backClick"`
- 动态显示

## 详情页
- 组件抽离
- <keep-alive>是全局的, 可以用exlude排除一些不想<keep-alive>的组件
- 最好不要用`quarySelector()`
- 怎样判断一个对象是否为空? : `Object.keys(goods).length`
- 可以通过覆盖的方式使详情页上的标签栏(tabbar)消失
- DetailGoodsInfo.vue中用到的网络请求数据结构和老师的不太一样, 所以DetailGoodsInfo.vue的部分内容也和老师的不太一样, 但大同小异. 
- html元素<i>是什么东西? 
- 详情页标题和内容的联动. 
- `$nextTick()`在元素渲染之后执行一次, 但图片可能没有渲染完成. 
- vue的mixin(混入), 我没有按照老师的演示, 而只是做了一个非常小的demo. 
- mixin能够抽离不同vue中相同的元素到一起, 有助于代码的复用. 
- vue会先执行mixin的东西. 
- store/index.js中的`(let item of context.state.cartList)`处可以分析下item是值还是指针.

## $toast

- 先写一个普通的组件Toast.vue, 再写一个index.js把Toast.vue挂到document上. 大概就是这么一个思路. 
- 当然还要在main.js中`use`. 

## fastclick
- 减小移动端点击300ms延迟. 
- 安装 `npm install fastclick --save`
- 在main.js中使用

## 图片懒加载
- 安装 `npm install vue-lazyload --save`. 
- npm有简写用法. 
- 在main.js中使用
- `vue-lazyload`可以加很多属性, 自己探索吧. 

## px2vw-css插件
- 用于css样式的单位转化. 

## 购物车页面
- mapGetters
- 计算属性传的是指针还是值? 

## 其他
- 适配机型: iphone5/SE, 其他机型显示会有问题. 
- 分类和我的老师是让自己做的. 
- polyfill, 一个Promise的补丁, 有一些浏览器不支持Promise. 本质上是浏览器的适配问题. 


