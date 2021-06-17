<template>
  <div class="home-recommend-view">
      <div class="home-recommend-view-item" v-for="item in recommends" :key="item.id">
          <a :href="item.link">
              <img :src="item.image" alt=""/>
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
// import { getHomeMultiData } from "network/home";
// import { Swiper, SwiperItem } from "components/common/swiper"; //自动找Swiper, SwiperItem还是找index.js?

export default {
  name: "HomeRecommendView",
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
  .home-recommend-view{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }
  .home-recommend-view-item{
    flex: 1;
  }
  .home-recommend-view-item img{
    width: 65px;
    height: 65px;
    border-radius: 100%;
  }
</style>
