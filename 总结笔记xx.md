**使用`vue cli`创建项目(已安装vue和node)，一些命令：**

* 全局安装vue cli

  ```
  npm install @vue/cli -g
  ```

* 拉取cli2

  ```
  npm install @vue/cli-init -g
  ```

* cli2创建项目

  ```
  vue init webpack project
  ```

* cli3创建项目

  ```
  vue create project
  ```

## 公共组件

1. NavBar

2. scroll

3. swiper

4. tabBar

5. toast(弹窗)

   * 封装toast插件：

     * toast组件，v-show控制是否显示

       data：

       * message：显示的内容
       * isShow：是否显示

     * 在main.js里面引入并安装

     ```
     import toast from 'components/common/toast'
     Vue.use(toast)
     ```

     

## 和项目相关的组件

1. BackTop
2. goods
3. MainTabBar
4. TabControl

## 页面组件

1. Home
2. Detail
3. ShopCart
4. Category
5. Profile

## 插件

1. Vue Router(路由管理)

   * 安装插件 `npm install vue-router --save`

     ```
     Vue.use(VueRouter)
     ```

   * 每个路由映射一个组件

     ```
     {path: '/home', component: Home}
     ```

     * 路由重定向)

       ```
       {path: '', redirect: '/home'}
       ```

   * 创建路由对象

     ```
     const router = new VueRouter({
       routes,
       mode: 'history'
     })
     ```

2. Vuex





# 首页

* NavBar
* HomeSwiper
* TabControl
* GoodsList

# 商品详情页

# 购物车