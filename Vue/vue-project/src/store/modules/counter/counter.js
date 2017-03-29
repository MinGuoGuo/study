import * as types from '../../../constatns';

const state = {
  count: 0
};

const mutations = {
    [types.ADD](state, action) {
      state.count++;
    },
    [types.SUB](state, action) {
      state.count--;
    }
};
export default mutations;