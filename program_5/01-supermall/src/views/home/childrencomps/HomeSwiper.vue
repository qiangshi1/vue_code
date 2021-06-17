<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.background">
        <!-- <swiper-item v-for="item in banners"> -->
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"; //自动找Swiper, SwiperItem还是找index.js?

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style>
</style>
