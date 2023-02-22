import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
    user: {},
  },
  getters: {

  },
  mutations: {
    GET_DATA(state, items) {
      state.items = items
    },
    DELETE_DATA(state, id) {
      const index = state.items.products.findIndex(i => i.id === id);
      console.log(index);
      state.items.products.splice(index, 1);
      
    },
    //user get 
    GET_DATA_USER(state, user) {
      state.user = user
    },

  },
  actions: {
    async getData({ commit }) {
      await axios.get('https://dummyjson.com/products')
        .then(response => response.data)
        .then(items => {

          commit('GET_DATA', items)
        }).catch((error) => {
          alert(error);
          console.log(error);
        })
    },
    async deleteData({ commit }, id) {
      await axios.delete('https://dummyjson.com/products/' + id)
      commit('DELETE_DATA', id);
    },
    //getdata user
    async getDataUser({ commit }) {
      await axios.get('https://dummyjson.com/users')
        .then(response => response.data)
        .then(user => {

          commit('GET_DATA_USER', user)
        }).catch((error) => {
          alert(error);
          console.log(error);
        })
    },

  },
  modules: {
  }
})
