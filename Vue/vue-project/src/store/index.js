import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './modules';
import modules from './modules';
// import createLogger from '../utils/plugins/logger';
import plugins from './plugins';
// console.log(createLogger);
// console.log(modules, actions, getters);

Vue.use(Vuex);

export default new Vuex.Store({
    actions, 
    getters, 
    modules,
    plugins
});