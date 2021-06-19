<template>
  <div class="foot-control">
    <div class="foot-item foot-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="foot-item foot-right">
      <div class="shopcart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailFootControl',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style>
.foot-control {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.foot-item {
  display: flex;
  flex: 1;
}
.foot-item > div {
  flex: 1;
}
.foot-left span {
  font-size: 13px;
}
.foot-item .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
}
.foot-item .collect {
  background-position: 0 0;
}
.foot-item .service {
  background-position: 0 -52px;
}
.foot-item .store {
  background-position: 0 -98px;
}
.foot-right {
  font-size: 15px;
  line-height: 50px;
}
.foot-right .shopcart {
  background-color: #ffe817;
  color: #333;
}
.foot-right .buy {
  background-color: #f69;
  color: #fff;
}
</style>