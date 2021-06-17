<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{res_data}}</h2>
  </div>
</template>
<script>
// 6. axios的封装用法
import {request1} from '../network/request.js'

export default {
  name: "About",
  data() {
    return {
      res_data: '',
    };
  },
  created() { 
    request1(// 6. 
      {url: '/'},
      res=>{
        this.res_data ='in About: '+ res;
        console.log('in About: '+ res);
      },
      res=>{
        console.log('in About failed: '+ res);
      }
    );
  },
};
</script>