<template>
  <nav-bar>
    <template #left>
      <img
        class="backImg"
        src="~assets/img/common/back.svg"
        @click="backClick"
      />
    </template>
    <template #center>
      <div class="title">
        <span
          v-for="(item, id) in titles"
          :key="id"
          @click="itemClick(id)"
          :class="{ detailactive: index === id }"
          >{{ item }}</span
        >
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '评论', '详情', '推荐'],
      index: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(id) {
      this.index = id
      this.$emit('titleClick', id)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
.title span {
  margin: 0 10px;
  padding-bottom: 5px;
}
.detailactive {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
.backImg {
  margin-top: 11px;
}
</style>