<template>
  <div class="recommend-info">
    <p class="recommend-title">热门推荐</p>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList"

export default {
  name: 'DetailRecommendInfo',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  }
}
</script>

<style>
.recommend-info {
  padding: 5px;
}
.recommend-title {
  padding-left: 8px;
  font-size: 15px;
  line-height: 40px;
  color: #333;
}
</style>