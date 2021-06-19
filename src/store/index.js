import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    cartList(state) {
      return state.cartList
    },
    cartListLength(state) {
      return state.cartList.length
    }
  },
  mutations: {
    addCount(state, product) {
      product.count++
    }
  },
  actions: {
    addCart(context, product) {
      return new Promise((resolve, reject) => {
        let old = context.state.cartList.find(item => item.iid === product.iid)
        if (old) {
          context.commit('addCount', old)
          resolve('商品数量+1')
        } else {
          product.count = 1
          product.checked = true
          context.state.cartList.push(product)
          resolve('添加到购物车成功')
        }
      })
    }
  }
})

export default store