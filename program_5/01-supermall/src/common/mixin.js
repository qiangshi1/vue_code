const detailPlugin = {
  data() {
    return {
      pluginData: 123
    }
  },
  mounted() {
    this.echoPluginData();
  },
  methods: {
    echoPluginData() {
        console.log("pluginData: ");
        console.log(this.pluginData);
    }
  }
}
export {
    detailPlugin,
};
