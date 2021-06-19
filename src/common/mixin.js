import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopShow: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.$el.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}