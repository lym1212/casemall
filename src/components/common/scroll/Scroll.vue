<template>
  <div
    class="wrapper"
    v-infinite-scroll="load"
    infinite-scroll-immediate="false"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {
      scrollY: 0
    }
  },
  methods: {
    load() {
      this.$emit('loadMore')
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.$emit('scroll', e)
      this.scrollY = e.target.scrollTop
    }, true)
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
  overflow-y: scroll;
}
</style>