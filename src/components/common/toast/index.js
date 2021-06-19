import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  // 组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 组件对象
  const toast = new toastConstructor()
  // 把toast挂载到一个div上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj