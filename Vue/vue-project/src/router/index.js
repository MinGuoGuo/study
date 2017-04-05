import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import List from '../components/List.vue';
import Counter from '../containers/Counter.vue';
import studentList from '../containers/studentsList';
import Counters from '../components/Counters.vue';

Vue.use(Router)

export default new Router({
  history: true,
  hash: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/counter',
      name: 'Couter',
      component: Counter
    }, {
      path: '/studentList',
      name: 'studentList',
      component: studentList
    }, {
      path: '/counters',
      name: 'Counters',
      component: Counters
    }
  ]
})
