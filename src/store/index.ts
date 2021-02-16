import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNavDrawerState: false,
    menuItemsState: [
      {
        type: 'Hot Drinks',
        items: [
          { name: 'Black Coffee', price: '3' },
          { name: 'Americano', price: '3' },
          { name: 'Latte', price: '3.5' },
          { name: 'Cappuccino', price: '3.5' },
          { name: 'Flat White', price: '4.5' },
          { name: 'Drip Coffee', price: '5' }
        ]
      },
      {
        type: 'Cold Drinks',
        items: [
          { name: 'Iced Coffee', price: '3' },
          { name: 'Cold Brew', price: '3.5' },
          { name: 'Iced Tea', price: '3' },
          { name: 'Vanilla Cream', price: '4' }
        ]
      },
      {
        type: 'Breakfast',
        items: [
          { name: 'Toast of the Day', price: '6' },
          { name: 'Eggs and Toast', price: '9' },
          { name: 'Avocado Toast', price: '11.5' },
          { name: 'French Toast', price: '9.5' }
        ]
      },
      {
        type: 'Lunch',
        items: [
          { name: 'Grilled Cheese', price: '9' },
          { name: 'Chili Cheese Toast', price: '10.5' },
          { name: 'Chicken Avocado Sandwhich', price: '14' },
          { name: 'Spinach Kale Salad', price: '14' }
        ]
      }
    ]
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
    },
    menuItems: state => {
      return state.menuItemsState
    }
  }
})
