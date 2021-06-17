<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
      ref="navbar"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :topimages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <!-- <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info> -->
      <detail-param-info
        ref="params"
        :param-info="paramInfo"
      ></detail-param-info>
      <!-- <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info> -->
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list
        ref="recommend"
        :goodsList="recommends"
        class="goods-list"
      ></goods-list>

      <!-- <span>我是有底线的</span> -->
    </scroll>
    <back-top
      class="back-top"
      v-show="isShowBackTop"
      @click.native="backClick"
    ></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
// 子组件
import DetailNavBar from "./childrencomps/DetailNavBar";
import DetailSwiper from "./childrencomps/DetailSwiper";
import DetailBaseInfo from "./childrencomps/DetailBaseInfo";
import DetailShopInfo from "./childrencomps/DetailShopInfo";
import DetailGoodsInfo from "./childrencomps/DetailGoodsInfo";
import DetailParamInfo from "./childrencomps/DetailParamInfo";
import DetailCommentInfo from "./childrencomps/DetailCommentInfo";
import DetailBottomBar from "./childrencomps/DetailBottomBar";

// 公共组件
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backtop/BackTop";
import Scroll from "components/common/scroll/Scroll";
import { detailPlugin } from "common/mixin";

// 方法
import { debounce } from "common/utils";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommand,
} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {
        image: "",
      },
      commentInfo: {},
      recommends: [],
      isShowBackTop: false,
      themeTopYs: [],
    };
  },
  mixins: [detailPlugin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll,
    BackTop,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
    // setTimeout(() => {

    //   this.$refs.scroll.refresh();
    //   console.log("here2");
    // },3000)
  },
  mounted() {
    const oDebounce = debounce(this.$refs.scroll.refresh, 300); // 刷新scroll用的
    const oDebounce1 = debounce(this.getThemeTopY, 300); // 刷新标题栏用的
    this.$bus.$on("itemImageLoad", () => {
      //GoodsList
      oDebounce("Detail oDebounce mounted");
      oDebounce1("Detail oDebounce1 mounted");
    });
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then((res) => {
        const data = res;
        this.topImages = data.topImages;
        this.goods = new Goods(data.goods);
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(data.paramInfo);
        this.commentInfo = data.commentInfo;
        // console.log(this.detailInfo);
        getRecommand("pop", 1).then((recommends) => {
          this.recommends.push(...recommends.list);
        });
        // console.log(this.recommends);
      });
    },
    imageLoad() {
      //goodsinfo
      // console.log("here imageLoad");
      const oDebounce = debounce(this.$refs.scroll.refresh, 300); // 刷新scroll用的
      const oDebounce1 = debounce(this.getThemeTopY, 300); // 刷新标题栏用的
      oDebounce("Detail oDebounce imageLoad");
      oDebounce1("Detail oDebounce1 imageLoad");
      // this.getThemeTopY()
    },
    contentScroll(position) {
      // this.$refs.scroll.refresh();
      this.isShowBackTop = -position.y > 1500;
      // console.log(position);
      // console.log(this.themeTopYs);
      if (this.themeTopYs.length === 4) {
        if (-position.y >= this.themeTopYs[3]) {
          this.$refs.navbar.currentIndex = 3;
        } else if (-position.y >= this.themeTopYs[2]) {
          this.$refs.navbar.currentIndex = 2;
        } else if (-position.y >= this.themeTopYs[1]) {
          this.$refs.navbar.currentIndex = 1;
        } else {
          this.$refs.navbar.currentIndex = 0;
        }
      }
    },
    addToCart() {
      // console.log("addToCart!!!");
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      product.count = 1;
      product.checked = true;
      // console.log(this.goods);

      this.$store.dispatch("addCart", product).then((res) => {
        // console.log(res);
        this.$toast.show(res,1500);
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log("here1");
    },
    getThemeTopY() {
      if (this.$refs.params && this.$refs.comment && this.$refs.recommend) {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      }
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(index);
      // this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      if (this.themeTopYs.length === 4 && index >= 0 && index <= 3) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
      } else {
        console.log("titleClick error! ");
      }
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.goods-list {
  padding-bottom: 0px;
}
.back-top {
  position: fixed;
  bottom: 58px;
  right: 10px;
}
</style>
