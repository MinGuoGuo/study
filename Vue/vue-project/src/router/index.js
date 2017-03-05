import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import List from '../components/List.vue'
import Counter from '../components/Counter.vue'

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
    },{
      path: '/counter',
      name: 'Couter',
      component: Counter
    }
  ]
})
