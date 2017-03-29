import * as types from '../../../constatns';

 export const state = {
  count: 0
};

export const mutations = {
    [types.ADD](state, action) {
      console.log(action);
      state.count++;
    },
    [types.SUB](state, action) {
      state.count--;
    }
};