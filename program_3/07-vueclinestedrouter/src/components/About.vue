<template>
    <h2>我是关于</h2>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
  created(){
    console.log('about created');
  },
  destroyed(){
    console.log('about destroyed');
  },
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
