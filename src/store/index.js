import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [1,2,3]
  },
  getters: {

  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
  
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        commit('loadProducts', res.data);
      })
    }
  },
  modules: {
  }
})
