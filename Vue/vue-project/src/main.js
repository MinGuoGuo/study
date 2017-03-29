// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import store from './store'
import router from './router'

Vue.use(ElementUI)
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

