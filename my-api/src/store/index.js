import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    items(state) {
      state.items;
    },
    detail(state, id) {
      return state.items.find(a => a.id === id)
    },
  },
  mutations: {
    ADD_DATA(state, listdata) {
      state.items.push(listdata);
    },
    GET_DATA(state, items) {
      state.items = items
    },
    DELETE_DATA(state, id) {
      state.items = state.items.filter(i => i.id !== id)
    },
    UPDATE_DATA(state, update) {

      let index = state.items.findIndex((e) => e.id == update.id)
      state.items[index] = {
        userId: update.userId,
        id: update.id,
        title: update.title,
        body: update.body,
      };

      // axios.put('https://jsonplaceholder.typicode.com/posts', update)


      // console.log(state.items[index]);
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(items => {
          console.log(items);
          commit('GET_DATA', items)
        })
    },
    addData({ commit }, listdata) {
      axios.post('https://jsonplaceholder.typicode.com/posts', listdata)

      commit('ADD_DATA', listdata,);
      this.showSuccessAlert

    },
    deleteData({ commit }, id) {
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
      commit('DELETE_DATA', id);
    },
    updateData({ commit }, update) {
      axios.put('https://jsonplaceholder.typicode.com/posts/' + update.id)
      commit('UPDATE_DATA', update)
    },



  },
  modules: {
  }
})
