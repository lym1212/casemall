<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <p>{{ $route.path }}</p> -->
    <!-- 具名插槽 -->
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777",
    },
  },
  // data() {
  //   return {
  //     isActive: false,
  //   };
  // },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // console.log(this.$route.path);
      this.$router.replace(this.path).catch((err) => err);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 2px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
  color: #ff5777;
}
</style>