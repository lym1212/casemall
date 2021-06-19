<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment-header">
      <p class="title">用户评价</p>
      <p class="more">更多</p>
    </div>
    <div>
      <div class="comment-user">
        <img :src="commentInfo.user.avatar" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <p class="comment-content">{{ commentInfo.content }}</p>
      <div class="comment-other">
        <span class="comment-date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="comment-img">
        <img :src="item" v-for="(item, id) in commentInfo.images" :key="id" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate: function (val) {
      let data = new Date(val * 1000)
      return formatDate(data, 'yyyy-MM-dd')
    }
  }
}
</script>

<style>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.comment-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.comment-header .title {
  float: left;
  font-size: 15px;
}
.comment-header .more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.comment-user {
  padding: 10px 5px;
}
.comment-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  vertical-align: middle;
}
.comment-user span {
  margin-left: 10px;
  font-size: 15px;
}
.comment-content {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.comment-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.comment-date {
  margin-right: 8px;
}
.comment-img {
  margin-top: 10px;
}
.comment-img img {
  width: 70px;
  height: 70px;
}
</style>