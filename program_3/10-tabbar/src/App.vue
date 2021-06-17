<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img src="@/assets/img/tabbar/home_unfocused.svg" alt="" slot="item-icon"/>
        <!-- <img src="./assets/img/tabbar/home_unfocused.svg" alt="" slot="item-icon"/> -->
        <img src="./assets/img/tabbar/home_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/items" active-color="green">
        <img src="./assets/img/tabbar/items_unfocused.svg" alt="" slot="item-icon"/>
        <img src="./assets/img/tabbar/items_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <img src="./assets/img/tabbar/shopping_unfocused.svg" alt="" slot="item-icon"/>
        <img src="./assets/img/tabbar/shopping_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <img src="./assets/img/tabbar/mine_unfocused.svg" alt="" slot="item-icon"/>
        <img src="./assets/img/tabbar/mine_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import("./components/tabbar/TabBar.vue");
const TabBarItem = () => import("./components/tabbar/TabBarItem.vue");
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
};
</script>
<style>
/* @import "./assets/css/base.css";
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0; */
/* 设置阴影 */
/* box-shadow: 0 -3px 1px rgba(100,100,100,0.15);
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  } */
</style>
