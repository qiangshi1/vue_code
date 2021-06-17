<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-header">
        <div class="header-title">用户评论</div>
        <div class="header-more">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(item, index) in commentInfo.images"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {
          // user: {
          //   avatar:
          //     "http://192.168.250.10:8001/pp1.jpg",
          //   uname: "王大拿",
          // },
          // content: "可以的！！！ ",
          // created: "1600910500",
          // style: "耶耶耶耶耶",
          // images: [
          //   "http://192.168.250.10:8001/pp2.jpg",
          //   "http://192.168.250.10:8001/pp3.jpg",
          //   "http://192.168.250.10:8001/pp4.jpg",
          //   "http://192.168.250.10:8001/pp5.jpg",
          //   "http://192.168.250.10:8001/pp6.jpg",
          //   "http://192.168.250.10:8001/pp7.jpg",
          //   "http://192.168.250.10:8001/pp8.jpg",
          //   "http://192.168.250.10:8001/pp9.jpg"

          // ],
        };
      },
    },
  },
  // created() {
  //   console.log(Object.keys(this.paramInfo).length);
  //   setTimeout(() => {
  //     console.log(this.commentInfo);
  //     console.log(Object.keys(this.commentInfo).length);
  //   }, 1000);
  // },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
