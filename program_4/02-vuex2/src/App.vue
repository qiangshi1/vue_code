<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <!-- 这种方法虽然不可行, 但不推荐直接修改vuex中的数据 -->
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>
    <!-- 推荐用这种方法 -->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <!-- mutation可以传参 -->
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(-10)">-10</button>
    <!-- vuex的getters -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.powerPowerCounter}}</h2>
    <!-- vuex的getters -->
    <h2>{{$store.state.sporters}}</h2>
    <!-- vuex的states的响应问题 -->
    <!-- 修改字段会响应 -->
    <button @click="changeSporters()">changeSporters</button>
    <!-- duixiang[新键]=新值的新增字段方法不会会响应 -->
    <button @click="detailSportersInvalid()">detailSportersInvalid</button>
    <!-- vue set可以使新增字段响应 -->
    <button @click="detailSportersValid()">detailSportersValid</button>
    <h2>{{$store.state.sporters2}}</h2>
    <!-- 但是往数字里边新增对象会响应 -->
    <button @click="addSporters2()">addSporters2</button>
    <!-- 不推荐在mutations中执行异步操作, 推荐在actions执行异步操作 -->
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo()">updateInfo</button>
    <!-- modules -->
    <h2>{{$store.getters.m_getAllNotebook}}</h2>

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
    },
    addCounter(num) {
      this.$store.commit('incrementCount', num);
    },
    changeSporters() {
      this.$store.commit('changeSporters');
    },
    detailSportersInvalid() {
      this.$store.commit('detailSportersInvalid');
    },
    detailSportersValid() {
      this.$store.commit('detailSportersValid');
    },
    addSporters2() {
      this.$store.commit('addSporters2');
    },
    updateInfo() {
      this.$store.dispatch('actionUpdateInfo').then(res=>{
        console.log(res+'success! ')
      });
    },
  }
};
</script>

<style>
</style>
