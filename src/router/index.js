import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      footerShow: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      footerShow: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      footerShow: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      footerShow: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      footerShow: true
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      footerShow: false
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router