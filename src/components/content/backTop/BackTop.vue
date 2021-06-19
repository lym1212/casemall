<template>
  <div class="backtop" @click="backClick">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backClick() {
      this.$emit('backTop')
    }
  }
}
</script>

<style>
.backtop {
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.backtop img {
  width: 43px;
  height: 43px;
}
</style>