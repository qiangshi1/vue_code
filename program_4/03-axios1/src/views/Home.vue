<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2>get from baidu: </h2>
    <h2>{{res_data}}</h2>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// 5. 组件中使用axios, 但这种方法太繁琐, 三方库更换太麻烦. 解决方法: axios封装
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      res_data: "",
    };
  },
  components: {
    HelloWorld,
  },
  created() { // 5. 
    axios.get("/").then((res) => {
      this.res_data = res.data;
    });
  },
};
</script>
