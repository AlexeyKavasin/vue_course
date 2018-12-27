import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    appTitle: 'Vue App',
    greeting: 'Привет. Что нужно сделать?'
  },
  mutations: {
    changeGreeting: (state, payload) => (state.greeting = payload)
  }
})

export default store
