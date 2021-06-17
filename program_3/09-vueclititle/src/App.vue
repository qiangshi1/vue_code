<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="'/user/'+userId_in_app_vue">User</router-link> |
      <router-link :to="{path: '/profile', query: {q_name: 'q', q_age: 18}}">Profile</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId_in_app_vue: 'zhangsan'
    }
  }
  // created: function () {
  //   console.log(this.$router)
  //   console.log(this.$route)
  // },
  // updated: function () {
  //   console.log(this.$router)
  //   console.log(this.$route)
  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
