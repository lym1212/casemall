<template>
  <div id="cart-item">
    <div class="selector">
      <check-button
        :is-checked="cartItem.checked"
        @selectClick="selectClick"
      ></check-button>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" />
    </div>
    <div class="item-info">
      <p class="item-title">{{ cartItem.title }}</p>
      <p class="item-desc">{{ cartItem.desc }}</p>
      <div class="item-bottom">
        <div class="item-price left">￥{{ cartItem.price }}</div>
        <div class="item-count right">x{{ cartItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'CartListItem',
  props: {
    cartItem: Object
  },
  components: {
    CheckButton
  },
  methods: {
    selectClick() {
      this.cartItem.checked = !this.cartItem.checked
    }
  }
}
</script>

<style>
#cart-item {
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-img {
  padding: 5px;
}
.item-img img {
  /* display: block; */
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info {
  position: relative;
  overflow: hidden;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
}
.item-title,
.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-bottom {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  margin-top: 10px;
}
.item-price {
  color: orangered;
}
</style>