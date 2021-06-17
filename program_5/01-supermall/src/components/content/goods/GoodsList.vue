<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :item="item"
    ></goods-list-item>
    <!-- <goods-list-item></goods-list-item> -->
  </div>
</template>

<script>
const GoodsListItem = () => import("./GoodsListItem.vue");
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goodsList: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  background-color: #fff;
}
</style>