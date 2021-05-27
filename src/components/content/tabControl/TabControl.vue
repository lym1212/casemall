<template>
  <div class="tab-control">
    <div
      v-for="(item, id) in titles"
      :key="id"
      class="tab-control-item"
      :class="{ active: id === index }"
      @click="itemClick(id)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    itemClick(id) {
      this.index = id;
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  font-size: 16px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>