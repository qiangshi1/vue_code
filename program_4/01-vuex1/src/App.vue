<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <!-- 这种方法虽然不可行, 但不推荐直接修改vuex中的数据 -->
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <!-- 推荐用这种方法 -->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {};
  },
  methods: {
    addition() {
      this.$store.commit('increment');
    },
    substraction() {
      this.$store.commit('decrement');
    }
  }
};
</script>

<style>
</style>
