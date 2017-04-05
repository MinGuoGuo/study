/*export default new Vuex.Store({
    state: {
        num: 0,
        list: [],
        total: 0,
        currentPage: 0
    },
    mutations: {
        counterUp,
        getList: (state, data = { list, count, page }) => {
            console.log(1)
            state.tableData = data.list
            state.total = data.count;
            state.currentPage = data.page;
            console.log(state)
        }
    },
    actions: {
        increment,
        getListActions: async ({commit}, options = {}) => {
            const result = await fetch('http://127.0.0.1/sellDoor/php/list.php', {
                method: 'POST',
                headers: {'Content-Type': 'text/plain'},
                body: JSON.stringify({page: 1, pagesize: 5, name: '', age: ''})
            })
            .then( (response) => {
                return response.json();
            })
            // .then((result)=>  {
            //        this.tableData = result.list;
            //        this.total = result.count;
            //        this.currentPage = result.page;
            // })
            .catch((error) => {
                console.log('请求失败！')
            });
            commit('getList', result)
        }
    },
    plugins: [
        createLogger()
    ]
})*/
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import modules from './modules';
import plugins from './plugins';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
    actions, 
    getters, 
    modules,
    plugins: [createLogger()]
});
