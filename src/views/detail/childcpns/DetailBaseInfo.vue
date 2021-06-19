<template>
  <!-- goods为空则不加载该组件 -->
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
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
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.new-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  position: relative;
  top: -8px;
  padding: 2px 5px;
  margin-left: 5px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
  background-color: var(--color-high-text);
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 1px;
}
.info-service span {
  font-size: 13px;
  color: #333;
}
</style>