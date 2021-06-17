<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <!-- <div slot="left">购</div> -->
      <div slot="center">购物街</div>
      <!-- <div slot="right">物</div> -->
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- <div class="wrapper">
      <div class="content"> -->
      <home-swiper
        :banners="banners"
        @imageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <!-- <goods-list :goodsList="goods[currentType].list"></goods-list> -->
      <!-- 用计算属性进一步抽离 -->
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
    <!-- </div>
    </div> -->
    <!-- <goods-list></goods-list> -->
  </div>
</template>

<script>
// 子组件
import HomeSwiper from "./childrencomps/HomeSwiper";
import HomeRecommendView from "./childrencomps/HomeRecommendView";
import HomeFeatureView from "./childrencomps/HomeFeatureView";
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";
// 方法
import { getHomeMultiData } from "network/home";
import { getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,

    NavBar,
    TabControl,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      result: null,
      banners: null,
      recommends: null,
      currentType: "pop",
      isShowBackTop: false,
      goods: {
        pop: { page: 1, list: [] },
        new_: { page: 1, list: [] },
        sel: { page: 1, list: [] },
      },
      numberForRefresh: 0,
      tabControlOffsetTop: null,
      isTabFixed: false, //是否吸顶标志位
      scrollY: 0,  // better-scroll的Y位置存储
    };
  },
  computed: {
    showGoods: function () {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1. 老师推荐把created的功能抽离成methods函数
    // getHomeMultiData().then((res) => {
    //   this.banners = res.data.banner.list;
    //   this.recommends = res.data.recommend.list;
    // });
    // getHomeGoods("pop", 1).then((goods) => {
    //   this.goods.pop.page = 1;
    //   this.goods.pop.list = goods.list;
    // });
    // getHomeGoods("new", 1).then((goods) => {
    //   this.goods.new_.page = 1;
    //   this.goods.new_.list = goods.list;
    // });
    // getHomeGoods("sel", 1).then((goods) => {
    //   this.goods.sel.page = 1;
    //   this.goods.sel.list = goods.list;
    // });
    // console.log(this.goods);
    // 2. 抽离之后的样子
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sel");
    // this.getHomeGoods("pop");
    // this.getHomeGoods("pop");
    // this.getHomeGoods("pop");
    // this.getHomeGoods("pop");
  },
  mounted() {
    // 1. 我的防止refresh太过频繁的处理方法----加上一个全局变量
    // this.$bus.$on("itemImageLoad", ()=>{
    //     if(this.numberForRefresh%10===0){
    //       console.log("--------");
    //       this.$refs.scroll.refresh();
    //     }
    //     this.numberForRefresh++;
    // });
    // 2. 老师的防止refresh太过频繁的处理方法----debounce----被抽离到utils.js中去了.
    const oDebounce = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("itemImageLoad", () => {
      oDebounce("test args!");
    });
  },
  activated(){
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.scrollY,0);
    // console.log("in home activated");
    // console.log(this.scrollY);
  },
  deactivated(){
    this.scrollY=this.$refs.scroll.getScrollY();
    // console.log("in home deactivated");
    // console.log(this.scrollY);
  },
  methods: {
    // 1. 网络请求相关方法
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // console.log("执行顺序, 这里是第1步");
      let this_type = type;
      // js里边new是一个关键字
      if (this_type == "new") {
        this_type = "new_";
        // console.log(this.goods["new_"].page);
        // console.log(this.goods["new_"]);
      }
      // let page = this.goods[this_type].page + 1;
      getHomeGoods(type, this.goods[this_type].page).then((goods) => {
        this.goods[this_type].list.push(...goods.list); //push的变参写法
        this.goods[this_type].page++;
        // console.log("执行顺序, 这里是第3步----异步执行的原因");
        // console.log(this.goods["pop"]);
      });
      if (this_type == "new_") {
        // console.log(this.goods["new_"].page);
        // console.log(this.goods["new_"]);
      }
      // console.log("执行顺序, 这里是第2步----异步执行的原因");
    },
    // 2. 事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new_";
          break;
        case 2:
          this.currentType = "sel";
        // break; //最后一个break可以省略
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },
    backTopClick() {
      // scrollTo在Scroll.vue中定义
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 2000;
      this.isTabFixed= -position.y > this.tabControlOffsetTop;

    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    // tabcontrol的吸顶效果相关
    swiperImageLoad() {
      this.tabControlOffsetTop=this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabControlOffsetTop);
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* position: absolute; */
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  /* 使用浏览器原生滚动时有效, 使用better-scroll时无效, 可以删去 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 69px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
}
</style>
