<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" />
    <div class="goods-desc">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
};
</script>

<style>
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-desc {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  overflow: hidden;
}
.goods-desc p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goods-desc .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-desc .collect {
  position: relative;
}
.goods-desc .collect::before {
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0 no-repeat;
  background-size: 14px 14px;
}
</style>