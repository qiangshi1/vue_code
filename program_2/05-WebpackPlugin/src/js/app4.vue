<template>
  <div>
    <p>我是 Vue 的 template4-检查是否热更新!</p>
    <p>{{ data }}</p>
    <Cpn/>
  </div>
</template>
<script>
import Cpn from './Cpn.vue'

export default {
  name: "App4",
  data() {
    return {
      data: "我是 data!",
    };
  },
  methods: {},
  components: {
    Cpn,
  }
};
</script>

<style scoped>
/* .title {
  color: purple; */
/* } */
</style>
