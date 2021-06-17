<template>
  <div>
    <swiper class="this-swiper">
      <swiper-item
        v-for="(item, index) in topimages"
        :key="index"
        class="this-swiper"
      >
        <img :src="item" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topimages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    updateTitle(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.this-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
