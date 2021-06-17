<template>
  <div>
    <p>我是Cpn.vue</p>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      data: "我是 data!",
    };
  },
  methods: {},
};
</script>

<style scoped>
/* .title {
  color: purple; */
/* } */
</style>
