<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
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
};
</script>
