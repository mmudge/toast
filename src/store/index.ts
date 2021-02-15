import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNavDrawerState: false
  },
  mutations: {
    setShowNavDrawer(state, value) {
      state.showNavDrawerState = value
    }
  },
  actions: {},
  modules: {},
  getters: {
    showNavDrawer: state => {
      return state.showNavDrawerState
    }
  }
})
