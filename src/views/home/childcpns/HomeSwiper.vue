<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoaded: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      // 只触发一次
      if (!this.isLoaded) {
        this.$emit('imageLoaded')
        this.isLoaded = true
      }
    }
  }
};
</script>

<style>
</style>