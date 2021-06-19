<template>
  <div>
    <cart-list-item
      v-for="item in list"
      :key="item.iid"
      :cart-item="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  computed: {
    ...mapGetters({
      list: 'cartList'
    })
  },
  components: {
    CartListItem
  }
}
</script>

<style>
</style>