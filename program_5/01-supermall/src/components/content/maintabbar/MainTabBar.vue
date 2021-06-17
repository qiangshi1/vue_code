<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img src="~assets/img/tabbar/home_unfocused.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/home_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="green">
        <img src="~assets/img/tabbar/category_unfocused.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/category_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingcart">
        <img src="~assets/img/tabbar/shoppingcart_unfocused.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/shoppingcart_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile_unfocused.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/profile_focused.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import("components/common/tabbar/TabBar.vue");
const TabBarItem = () => import("components/common/tabbar/TabBarItem.vue");
export default {
  name: "MainTabBar",
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

</style>
