<template>
  <div class="cart-foot">
    <div class="select-all">
      <check-button
        class="btn"
        @selectClick="selectClick"
        :is-checked="isSelectAll"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计:<span>{{ totalPrice }}</span>
    </div>
    <div class="check-out">
      结算<span v-show="goodsCount ? true : false">({{ goodsCount }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CartFoot',
  computed: {
    ...mapGetters({
      list: 'cartList'
    }),
    totalPrice() {
      return '￥' + this.list.filter(item => {
        return item.checked
      }).reduce((total, item) => {
        return total + item.price * item.count
      }, 0).toFixed(2)
    },
    goodsCount() {
      return this.list.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      return !(this.list.find(item => !item.checked)) && this.list.length != 0
    }
  },
  components: {
    CheckButton
  },
  methods: {
    selectClick() {
      if (this.isSelectAll) {
        this.list.forEach(item => item.checked = false)
      } else {
        this.list.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style>
.cart-foot {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 49px;
  width: 100%;
  height: 40px;
  background-color: rgb(245, 243, 243);
  /* line-height: 40px; */
}
.select-all {
  display: flex;
  align-items: center;
  height: 100%;
}
.select-all .btn {
  margin-left: 5px;
}
.select-all span {
  padding-left: 5px;
}
.cart-foot .price {
  margin-left: 30px;
}
.cart-foot .price span {
  color: orangered;
  font-size: 14px;
}
.check-out {
  position: absolute;
  right: 0;
  /* padding: 0 5px; */
  height: 100%;
  width: 80px;
  background-color: orangered;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
</style>