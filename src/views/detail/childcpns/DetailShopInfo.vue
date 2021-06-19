<template>
  <div class="shop-info">
    <div class="shop-header">
      <img :src="shop.logo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-msg">
      <div class="shop-msg-item shop-msg-left">
        <div class="info-sells">
          <div class="sells-count">{{ shop.sells }}</div>
          <p class="sells-text">总销量</p>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <p class="goods-text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-msg-item shop-msg-right">
        <table>
          <tr v-for="(item, id) in shop.score" :key="id">
            <td>{{ item.name }}</td>
            <td class="shop-score" :class="{ 'high-score': item.isBetter }">
              {{ item.score }}
            </td>
            <td
              class="shop-score-text"
              :class="{ 'high-score-text': item.isBetter }"
            >
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-footer">
      <p class="enter-shop">进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: Object,
    default() {
      return {}
    }
  }
}
</script>

<style>
.shop-info {
  padding: 25px 8px;
}
.shop-header {
  display: flex;
  align-items: center;
  line-height: 45px;
}
.shop-header img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-header span {
  margin-left: 10px;
  vertical-align: middle;
}
.shop-msg {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-msg-item {
  flex: 1;
}
.shop-msg-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-msg-right {
  font-size: 13px;
  color: #333;
}
.shop-msg-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-msg-right table td {
  padding: 5px 0;
}
.shop-score {
  color: #5ea732;
}
.shop-score-text span {
  color: #fff;
  background-color: #5ea732;
}
.high-score {
  color: #f13e3a;
}
.high-score-text span {
  color: #fff;
  background-color: #f13e3a;
}
.shop-footer {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  background-color: #f2f5f8;
  border-radius: 10px;
}
</style>