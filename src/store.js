import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    appTitle: 'Vue App',
    users: []
  },
  mutations: {
    changeTitle: (state, payload) => (state.test = payload),
    setUsers: (state, payload) => (state.users = payload)
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get('http://localhost:3004/users')
        .then(response => commit('setUsers', response.data))
        .catch(error => console.error(error))
    }
  }
})

export default store
