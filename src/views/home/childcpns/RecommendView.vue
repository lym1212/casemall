<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, id) in recommends" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  margin: 3px 0;
  background-color: #fff;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 85%;
}
</style>