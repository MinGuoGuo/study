import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import List from '../components/List.vue'

Vue.use(Router)

export default new Router({
  history: true,
  hash: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
