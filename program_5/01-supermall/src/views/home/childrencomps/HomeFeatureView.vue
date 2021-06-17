<template>
  <div class="home-feature-view">
      <a href="http://www.baidu.com">
          <img src="~assets/img/home/recommend_bg.jpg" alt=""/>
      </a>
  </div>
</template>
<script>
// import { getHomeMultiData } from "network/home";
// import { Swiper, SwiperItem } from "components/common/swiper"; //自动找Swiper, SwiperItem还是找index.js?

export default {
  name: "HomeFeatureView",
  //   components: {
  //     Swiper,
  //     SwiperItem,
  //   },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },

};
</script>

<style scoped>
  .home-feature-view img{
    width: 100%;
  }
</style>
