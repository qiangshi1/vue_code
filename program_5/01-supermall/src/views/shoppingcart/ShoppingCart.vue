<template>
  <div>
    <nav-bar class="nav-bar">
      <div v-if="!cartListLength" slot="center">购物车</div>
      <div v-else slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>
    <scroll ref="scroll" class="content">
      <cart-list class="cart-list"></cart-list>
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartList from "./childrencomps/CartList";
import CartBottomBar from "./childrencomps/CartBottomBar";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
    Scroll,
  },
  computed: {
    ...mapGetters({
      cartListLength: "cartListLength",
    }),
  },
  activated(){
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
.cart-list{
  /* padding-bottom: 89px; */

}
</style>
