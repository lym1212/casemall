## 弹窗插件Toast封装

##### 1. Toast.vue

用v-show控制是否显示

* data

  * message： 显示内容
  * isShow：是否显示

* methods

  `show()` 改变isShow的值，给message复制，创建一个定时器再次改变isShow的值

  ```
  show(msg, duration = 1000) {
        this.isShow = true
        this.message = msg
  
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
  ```

##### 2. index.js

Vue.js插件安装时会调用插件的install方法

* `Vue.extend`返回一个“扩展实例构造器”，

```
obj.install = function (Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 实例化组件对象
  const toast = new toastConstructor()
  // 把toast组件挂载到一个div上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}
```

##### 3. 在main.js中引用并安装

```
import toast from 'components/common/toast'
Vue.use(toast)
```

##### 4. 在Detail.vue中使用

```
this.$toast.show(res, 1000)
```

## TabBar组件

##### 1. TabBar.vue

在div中使用一个匿名插槽来放每一个TabBarItem

##### 2. TabBarItem.vue

props设置两个需要传递的属性：

* path：字符串，这个Item对应的路由路径

* activeColor：字符串，被选中后文字的颜色，默认值为‘#ff5777’

  ```
  props: {
      path: String,
      activeColor: {
        type: String,
        default: "#ff5777",
      },
    }
  ```

一个Item包括三个插槽：

* 没被选中时的图片
* 被选中时的图片
* 图标下的文字

```
<div v-show="!isActive"><slot name="item-icon"></slot></div>
<div v-show="isActive"><slot name="item-icon-active"></slot></div>
<div :style="activeStyle"><slot name="item-text"></slot></div>
```

用v-show控制显示哪张图片

```
isActive() {
	// $route 获取当前为活跃状态的路由
   	return this.$route.path.includes(this.path);
}
```

动态绑定style控制文字颜色

```
activeStyle() {
	return this.isActive ? { color: this.activeColor } : {};
}
```

##### 3. 点击切换路由

```
this.$router.replace(this.path).catch((err) => err)
```

## Swiper轮播图组件

## Scroll滚动组件

## NavBar组件

导航条设置三个插槽，使用时在需要内容的插槽中插入内容即可

```
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
```

左右两个div设置浮动，中间部分使用flex布局

## BackTop组件+混入

## GoodsList组件

## MainTabBar组件

##### 1. 导入TabBar和TabBarItem并注册

##### 2. 使用并插入图片和文字，path传入地址

* 例：

  ```
  <tab-bar>
      <tab-bar-item path="/home">
          <template #item-icon>
              <img src="~assets/img/tabbar/home.svg" />
          </template>
          <template #item-icon-active>
              <img src="~assets/img/tabbar/home_active.svg" />
          </template>
          <template #item-text>
              <p>首页</p>
          </template>
      </tab-bar-item>
  </tab-bar>
  ```

##### 3. 在App.vue中导入MainTabBar并注册， 直接使用

```
<main-tab-bar/>
```

## TabControl组件

## axios获取数据

安装 `npm install axios --save`

##### 1. request.js

封装并导出一个request方法：

* 创建axios实例(`axios.create`返回的是一个Promise对象)

* 设置请求拦截器和响应拦截器

* config是请求的相关配置

  ```
  export function request(config) {
    // 创建axios实例
    const instance = axios.create({
      // 根路径
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })     // 返回一个promise对象
    // 拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      console.log(err);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err);
    })
    // 返回这个promise对象
    return instance(config)
  }
  ```

##### 2. 使用request()

例如：获取首页要展示的商品数据

* 导入request方法

* 导出一个返回request函数的方法再导入到home.vue中

  ```
  export function getHomeGoods(type, page) {
    return request({
      url: '/home/data',
      params: {
        type, page
      }
    })
  }
  ```

##### 3. 获取商品详情页的数据

如果所需数据比较乱，可以封装一个类来获取需要的数据

* 例如：获取商品的信息

  ```
  export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
    }
  }
  ```

## Vue Router路由

## Vuex

## Home页面

## Detail页面

## 购物车页面





