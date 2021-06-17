<template>
  <div class="tab-bar-item" @click="itemClicked">
    <!-- 为避免插槽被替换造成不可知的问题, 建议外包div写v-if/v-bind等 -->
    <slot v-if=!isActive name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- <div :class="{active: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 来自<tab-bar-item path="/home">的path等等
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#9a1bcc',
    }
  },
  // data() {
    // return {
    //   isActive: false,
    // };
  // },
  computed: {
    isActive(){
      // 判断当前路由是否包含我(tab-bar-item)的路由
      // 即判断活跃的路由是否是我这个路由
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle(){
      return this.isActive? {color: this.activeColor}: {}
    }
  },
  methods:{
    itemClicked(){
      // console.log(this);
      // this.isActive=!this.isActive;
      // 加if可以避免console报错: Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation
      // 参考: https://blog.csdn.net/qq_36437172/article/details/108269846
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>
<style>
@import "../../assets/css/base.css";

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 69px;
}
.tab-bar-item img {
  width: 29px;
  height: 29px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #9a1bcc;
}
</style>
