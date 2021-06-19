<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="detail-container" ref="scroll" @scroll="pageScroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <detail-goods-info
        :detail-info="detailInfo"
        ref="goods"
        @detailImageLoad="detailImageLoad"
      ></detail-goods-info>
      <detail-recommend-info
        :goods="recommends"
        ref="recommend"
      ></detail-recommend-info>
    </scroll>
    <detail-foot-control @addToCart="addToCart" />
    <back-top @backTop="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
import DetailNavBar from './childcpns/DetailNavBar'
import DetailSwiper from './childcpns/DetailSwiper'
import DetailBaseInfo from './childcpns/DetailBaseInfo'
import DetailShopInfo from './childcpns/DetailShopInfo'
import DetailGoodsInfo from './childcpns/DetailGoodsInfo'
import DetailCommentInfo from './childcpns/DetailCommentInfo'
import DetailRecommendInfo from './childcpns/DetailRecommendInfo'
import DetailFootControl from './childcpns/DetailFootControl'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, getRecommed, Goods, Shop } from 'network/detail'
import { debounce } from 'common/utils'
import { backTopMixin } from 'common/mixin'
import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      commentInfo: {},
      recommends: [],
      offsetTops: [],
      getOffsetTops: null,
      currentIndex: 0,
      foot: false
    }
  },
  mixins: [backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailFootControl,
    Scroll
  },
  created() {
    // 当前活跃路由this.$route
    this.iid = this.$route.params.iid
    // 请求数据
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      console.log(this.goods);
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommed().then(res => {
      this.recommends = res.data.list
    })
    this.getOffsetTops = debounce(() => {
      this.offsetTops = []
      this.offsetTops.push(0)
      this.offsetTops.push(this.$refs.comment.$el.offsetTop)
      this.offsetTops.push(this.$refs.goods.$el.offsetTop)
      this.offsetTops.push(this.$refs.recommend.$el.offsetTop)
      this.offsetTops.push(Number.MAX_VALUE)
      console.log(this.offsetTops);
    }, 1000)
  },
  methods: {
    ...mapActions(['addCart']),
    titleClick(id) {
      this.$refs.scroll.$el.scrollTo({
        top: this.offsetTops[id],
        left: 0,
        behavior: 'instant'
      })
    },
    pageScroll(e) {
      this.isBackTopShow = e.target.scrollTop > 800

      const position = e.target.scrollTop
      let length = this.offsetTops.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (position >= this.offsetTops[i] && position < this.offsetTops[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.index = this.currentIndex
        }
      }
    },
    detailImageLoad() {
      this.getOffsetTops()
    },
    // loadMore() {
    //   this.foot = true
    // },
    addToCart() {
      const product = {}
      product.iid = this.iid
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.nowPrice
      // this.$store.dispatch('addCart', product)
      this.addCart(product).then(res => {
        console.log(this.$toast);
        this.$toast.show(res)
      })
    }
  }
}
</script>

<style>
#detail {
  padding-top: 44px;
  padding-bottom: 49px;
  background-color: #fff;
}
.detail-nav {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: #fff;
}
.detail-container {
  position: relative;
}
.nomore {
  height: 50px;
}
</style>