<template>
  <div class="check-button" :class="{ checked: isChecked }" @click="select">
    <img src="~assets/img/cart/tick.svg" v-show="isChecked" />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: Boolean
  },
  methods: {
    select() {
      this.$emit('selectClick')
    }
  }
}
</script>

<style>
.check-button {
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: 2px solid rgb(216, 215, 215);
}
.checked {
  background-color: #ff8198;
  border-color: #ff8198;
}
.check-button img {
  display: block;
  vertical-align: middle;
}
</style>