import Vue from 'vue'
import Vuex from 'vuex'

import juegos from '@/assets/games.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
