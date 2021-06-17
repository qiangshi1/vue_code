<template>
  <div>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <table
        v-for="(table, index) in paramInfo.sizes"
        class="info-size"
        :key="index"
      >
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(info, index) in paramInfo.infos" :key="index">
          <td class="info-param-key">{{ info.key }}</td>
          <td class="param-value">{{ info.value }}</td>
        </tr>
      </table>
    </div>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {
          // sizes: [
          //   [
          //     ["外搭衬衫", "后衣长", "肩宽", "胸围", "袖长", "前衣长"],
          //     ["S", "110", "60", "124", "43", "94"],
          //     ["M", "111", "61", "128", "44", "95"],
          //     ["L", "112", "62", "132", "45", "96"],
          //     ["XL", "113", "63", "136", "46", "97"],
          //   ],
          //   [
          //     ["裙子", "裙长", "腰围", "胸围", "小腿围"],
          //     ["S", "92", "70", "70", "-"],
          //     ["M", "93", "74", "74", "-"],
          //     ["L", "94", "78", "78", "-"],
          //     ["XL", "95", "82", "82", "-"],
          //   ],
          // ],
          // infos: [
          //   {
          //     key: "材质",
          //     value: "其他"
          //   },
          //   {
          //     key: "裙长",
          //     value: "短裙(76-90cm)"
          //   },
          //   {
          //     key: "腰型",
          //     value: "高腰"
          //   },
          //   {
          //     key: "尺码",
          //     value: "均码"
          //   },
          //   {
          //     key: "季节",
          //     value: "夏季"
          //   },
          //   {
          //     key: "组合形式",
          //     value: "单件"
          //   },
          //   {
          //     key: "裙型",
          //     value: "其他"
          //   },
          //   {
          //     key: "图案",
          //     value: "色块"
          //   }
          // ],
          // image: "http://192.168.250.10:8001/params.jpeg",
        };
      },
    },
  },
  // created() {
  //   // console.log(Object.keys(this.paramInfo).length);
  //   setTimeout(() =>{
  //     console.log(this.paramInfo);
  //   },1000)
  // },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
