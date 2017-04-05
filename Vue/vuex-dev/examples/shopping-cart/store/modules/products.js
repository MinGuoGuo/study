import shop from '../../api/shop'
import * as types from '../mutation-types';

const _products = [
  {"id": 1, "title": "苹果mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "白色衬衫", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "周杰伦CD", "price": 19.99, "inventory": 5}
]

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}


// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products });
    })
  }
}

// const actions = {
//     getAllProducts({commit}, _products) {
//        setTimeout(() => {
//           commit(types.RECEIVE_PRODUCTS, 5);
//        }, 100)
//     }
// }


// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    debugger
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
