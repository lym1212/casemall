<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, id) in topImages" :key="id">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
.detail-swiper {
  text-align: center;
  height: 300px;
}
</style>