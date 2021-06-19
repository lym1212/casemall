<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template #center>
        <p>购物车({{ count }})</p>
      </template>
    </nav-bar>
    <scroll class="cart-container">
      <cart-list></cart-list>
    </scroll>
    <cart-foot></cart-foot>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childcpns/CartList'
import CartFoot from './childcpns/CartFoot'
import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
  name: "ShopCart",
  computed: {
    ...mapGetters({
      count: 'cartListLength'
    })
  },
  components: {
    NavBar,
    CartList,
    CartFoot,
    Scroll
  }
};
</script>

<style>
.cart {
  position: relative;
  height: 100vh;
  /* padding-top: 44px;
  padding-bottom: 49px; */
  background-color: #fff;
}
.cart-nav {
  position: absolute;
  top: 0;
  z-index: 9;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
.cart-container {
  position: absolute;
  top: 44px;
  height: calc(100% - 44px - 49px - 40px);
  width: 100%;
}
</style>