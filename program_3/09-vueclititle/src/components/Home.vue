<template>
  <div>
    <div>
      <h2>我是首页</h2>
      <!-- 写相对路径 -->
      <router-link to="/home/news">HomeNews</router-link> |
      <router-link to="/home/message">HomeMessage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
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
