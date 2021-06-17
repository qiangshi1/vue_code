<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 初始化scroll
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true, //必须要有这一行, 否则某些元素不支持点击.
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.bscroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    // 监听滚动到底部
    this.bscroll.on("pullingUp", () => {
      // console.log("上拉加载更多! ");
      this.$emit("pullingUp");
      this.finishPullUp();
    });
  },
  methods: {
    scrollTo(x, y, time = 350) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
    refresh() {
      this.bscroll && this.bscroll.refresh();
    },
    getScrollY(){
      // console.log("getScrollY");
      // console.log(this.bscroll.y);
      return this.bscroll ? this.bscroll.y : 0
    }
  },
};
</script>

<style scoped>
</style>