<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <scroll
      class="container"
      @scroll="pageScroll"
      @loadMore="load"
      ref="scroll"
    >
      <home-swiper :banners="banners" @imageLoaded="imageLoaded" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
        :class="{ fixed: isFixed }"
      ></tab-control>
      <goods-list
        :class="{ goodslist: isFixed }"
        :goods="showGoods"
      ></goods-list>
    </scroll>

    <back-top @backTop="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from 'components/content/backTop/BackTop'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from "./childcpns/HomeSwiper";
import RecommendView from "./childcpns/RecommendView";
import FeatureView from "./childcpns/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  },
  data() {
    return {
      banners: [], // 轮播图
      recommends: [], // 推荐
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      isBackTopShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 获取轮播图和推荐部分数据
    this.getHomeMultidata();
    // 获取商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  activated() {
    this.$refs.scroll.$el.scrollTo({
      top: this.saveY,
      left: 0,
      behavior: 'instant'
    })
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scrollY
  },
  methods: {
    // 切换商品展示列表
    tabClick(id) {
      switch (id) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    load() {
      this.getHomeGoods(this.currentType)
    },
    pageScroll(e) {
      this.isBackTopShow = e.target.scrollTop > 800
      this.isFixed = e.target.scrollTop > this.tabOffsetTop
    },
    backTop() {
      this.$refs.scroll.$el.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    imageLoaded() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    // 网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.container {
  position: relative;
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
.goodslist {
  padding-top: 40px;
}
</style>