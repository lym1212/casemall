<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #item-icon>
        <img src="~assets/img/tabbar/home.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/home_active.svg" alt="" />
      </template>
      <template #item-text>
        <p>首页</p>
      </template>
      <!-- slot属性已废弃 -->
      <!-- <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" />
        <p slot="item-text">首页</p> -->
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #item-icon>
        <img src="~assets/img/tabbar/category.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/category_active.svg" alt="" />
      </template>
      <template #item-text>
        <p>分类</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template #item-icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template #item-text>
        <p>购物车</p>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #item-icon>
        <img src="~assets/img/tabbar/profile.svg" alt="" />
      </template>
      <template #item-icon-active>
        <img src="~assets/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template #item-text>
        <p>我的</p>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>