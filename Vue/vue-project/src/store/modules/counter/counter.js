import * as types from '../../../constatns';

 export const state = {
    count: 0
};

export const mutations = {
    [types.ADD](state, action) {
      // state.count = state.count + action.num;
      const count = state.count + action.num;
      debugger;
      state = Object.assign({}, state, {});
    },
    [types.SUB](state, action) {
      state.count--;
    }
};