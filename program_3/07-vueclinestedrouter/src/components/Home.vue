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
  data(){
    return{
      path: '/'
    }
  },
  components: {},
  // created(){
  //   console.log('home created');
  // },
  // destroyed(){
  //   console.log('home destroyed');
  // },
  //activated()和deactived()只有<keep-alive>时才有效
  activated(){
    // console.log(this.path);
    // console.log(this.$router);
    this.$router.push(this.path);
  },
  // deactivated(){
  //   console.log(this.path);
  // }
  beforeRouteLeave(to, from, next){
    console.log(this.$route.path);
    this.path=this.$route.path;
    next();
  }
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
