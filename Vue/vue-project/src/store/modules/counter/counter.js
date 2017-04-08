import * as types from '../../../constatns';

 export const state = {
    count: 0
};

export const mutations = {
    [types.ADD](state, action) {
      state.count = state.count + action.num;
    },
    [types.SUB](state, action) {
      state.count--;
    }
};