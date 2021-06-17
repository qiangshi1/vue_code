<template>
<div>
  <h2>我是用户</h2>
  <h2>{{userId_in_user_vue}}</h2>
  <h2>{{$route.params.userId_in_index_js}}</h2>
  </div>
</template>

<script>

export default {
  name: 'User',
  computed: {
    userId_in_user_vue() {
      return this.$route.params.userId_in_index_js; 
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
