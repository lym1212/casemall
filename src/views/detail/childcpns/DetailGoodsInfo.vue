<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="desc-left left"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="desc-right right"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, id) in detailInfo.detailImage[0].list"
        :src="item"
        :key="id"
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('detailImageLoad')
    }
  }
}
</script>

<style>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.desc-left,
.desc-right {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.desc-left::before,
.desc-right::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.desc-right::after {
  right: 0;
}
.info-desc .desc {
  padding: 15px 0;
  font-size: 15px;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>