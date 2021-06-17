<template>
    <div id="app">
      <!-- <button>首页</button>
      <button>关于</button> -->
      <router-link to="/home" tag="button" replace>首页</router-link>
      <router-link to="/about">关于</router-link>
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    homeClick(){
      //$router是隐藏方法
      console.log('shishishi');
      this.$router.replace('/home');
    },
    aboutClick(){
      this.$router.replace('/about');

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-active {
    color: red;
  }
</style>
