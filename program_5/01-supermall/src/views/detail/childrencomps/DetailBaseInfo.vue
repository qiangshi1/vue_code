<template>
  <!-- "Object.keys(goods).length !== 0" 判断对象是否为空 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img
          v-if="goods.services[index - 1].icon"
          :src="goods.services[index - 1].icon"
        />
        <img v-else :src="icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAA2hJREFUOBGllUtIVGEUx8/3XUfHvDNNLzInaAhqxqaHZY9VZKuIkIoQjLZJ7XrRoiBoUy2KiCKIqDYRBe2yoAehUS0E7QVqQpCFpeQD9c5LZ+6c/ufqtZtlWH2L73G+c373nPOd77uKpmhcOWtmKpHblSeqZkXLFXOYlbKJqVcpegXZw4D231GtvYnfIdRkIVdF/FZP/2HIjxGzKfsAZZlVFynS+MB8JvI7dkpZpGlbsM167qw9nfbMKbVy9sJET99LAE9BrkA8bxTo9eaKrcXBDmtx8L0VMc1o0CBjHT52ETrdKm8YXoY7n/A4tWpO2M6MNMGbMID3teGvM1t7e1zFfxqd8GOB5uGoyVbMvMSI+29B6fLQIitq7ud4vFBsC6RDTg8h/Ep4Wm/WHjmglILj02+ZWGBplnMNMCqz7M+zYHlGcUUoZKXtT3IwBhdFSzr6vk4fSeRAiRuYqQxh2kwqGSjUEZ1M2zuJOIjTvvY/UER7Ds5dFlZyNL9Dw/3t4qEm49a/eipQVMxRzcZNYQhT45iWIYSRGQtWv5ku2Bu+CxVbYYCVESbhJNPDscBHLxSVsQny11YsVOWVy1yg2P8iFQS7s5P3IesUJjxWWfgO7380pQ2pllVEuQdWNLTZ3ZnKU3ffGZnyOMBRuXn9qK4wV1U5pSebZtvQU9aqDp8rJpW7L/DpQLmmxgBrIQ5xQCMnzSiVwlT36wrni+NdsN267oUjrGdSUt6cevVlnmp7tAY6PmGKx09EaKv8bhm9zQuHQemfoGJn2+wyniiOzzMtOyOXQhuqaElJe1+3Fy7zZHlwGzI3v6TDujF5z10n4vNK83bmA9JnBwr8YUdulZsnxk/5Hp88+dOL5xr+aZS3BdVQ77w1YE3ocmWlDyXydvwRuvg3cNGVh8uxjZpvhCVg5HmsybOZGxl9gccoglzWIy37fpcWV1/GZHRuma1GrsCmGjadBYW+jTPeDXTJ3gRYFulYKJIl+y4U10JRfjlXDda3nRvV2JgTHSlLqaA82XtwB/ZC14Rus4+MmuL3g52iI+0nsAgklESy4zjSdhCrkKOkaBTrL9BGmfIC3KYikcN8EIILZkn0tGppyY7JxvpfwO4mb5gdTAxla7HeglKrAKAUN0ru6Df5mUL+2Jzpu6OaBoZdG+/4Hdw6nZmdpwP4AAAAAElFTkSuQmCC",
    };
  },
};
</script>
<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.info-other {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  flex-wrap: wrap;
}
.info-service-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span {
  font-size: 13px;
  color: #333;
}
</style>