import * as types from '../../../constatns';

export const state = {
    data: {
        list: [],
        total: 0,
        currentNo: 1
    }
}

export const mutations = {
    [types.INITLIST](state, action) {
        console.log(action);
        const list = action.list;
        const total = action.count;
        const currentNo =  action.page;
        state.data = Object.assign({}, state.data, {list, total, currentNo});
    }
}
