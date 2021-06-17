<template>
  <div class="goods-list-item">
    <!-- <a :href="item.image"> -->
    <a @click="goodsClick">
      <img v-lazy="item.image" alt="" @load="imageLoad"/>
      <div class="goods-info">
        <p>{{item.title }}</p>
        <span class="price">{{item.price}}</span>
        <span  class="collect">{{item.cfavos}}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    imageLoad(){
      this.$bus.$emit("itemImageLoad");
    },
    goodsClick(){
      // 比如str是http://192.168.250.7:8001/pop02.png, 那么a[1]是pop02. 
      // 和老师讲得不一样, 我没有iid, 所以我用图片的名字代替iid. 
      let str = this.item.image;
      let a = str.match(/([a-zA-Z0-9]*)\.png$/);  
      this.$router.push("/detail/" + a[1]);
    }
  }
};
</script>
<style scoped>
.goods-list-item{
    padding-bottom: 40px;
    /* 子绝父相 */
    position:relative;
    width:48%;
}
.goods-list-item img{
    width:100%;
    border-radius:5px;
}
.goods-info{
    font-size:12px;
    position: absolute;
    bottom:5px;
    left:0;
    right:0;
    overflow:hidden;
    text-align: center;
}
.goods-list-item p{
    overflow:hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    margin-bottom: 3px;
}
.goods-info .price{
    color:var(--color-high-text);
    margin-right:20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    content:'';
    position:absolute;
    left:-15px;
    top:-1px;
    width:14px;
    height: 14px;
    /* 伪元素， 星星小图标 */
    background:url("~assets/img/common/collect.svg") 0 0/14px 14px; 
}
</style>
