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
          {
            name: 'Black Coffee',
            price: '3',
            text: 'Organic coffee beans'
          },
          {
            name: 'Americano',
            price: '3',
            text: 'Expresso and hot water'
          },
          {
            name: 'Latte',
            price: '3.5',
            text: 'Steamed milk and expresso'
          },
          {
            name: 'Cappuccino',
            price: '3.5',
            text: 'Foamed milk and expresso'
          },
          {
            name: 'Flat White',
            price: '4.5',
            text: 'Steamed microfoam milk and expresso'
          },
          {
            name: 'Drip Coffee',
            price: '5',
            text: 'Boiling water dripped through perforated filter'
          }
        ]
      },
      {
        type: 'Cold Drinks',
        items: [
          {
            name: 'Iced Coffee',
            price: '3',
            text: 'Organic coffee beans on ice'
          },
          {
            name: 'Cold Brew',
            price: '3.5',
            text: 'Coffee beans soaked and brewed in cold water'
          },
          {
            name: 'Iced Tea',
            price: '3',
            text: 'Fresh lemon, hibiscus, lavender'
          },
          {
            name: 'Vanilla Cream',
            price: '4',
            text: 'Expresso with cream and vanilla'
          }
        ]
      },
      {
        type: 'Breakfast',
        items: [
          {
            name: 'Toast of the Day',
            price: '6',
            text: 'Fresh baked bread daily'
          },
          {
            name: 'Eggs and Toast',
            price: '9',
            text: 'Two eggs, choice of toast, avocado'
          },
          {
            name: 'Avocado Toast',
            price: '11.5',
            text: 'Toast of the day, avocado, greens'
          },
          {
            name: 'French Toast',
            price: '9.5',
            text: 'Toast of the day, fresh berries, syrup'
          }
        ]
      },
      {
        type: 'Lunch',
        items: [
          {
            name: 'Grilled Cheese',
            price: '9',
            text: 'Toast of the day, 3 cheeses'
          },
          {
            name: 'Chili Cheese Toast',
            price: '10.5',
            text: 'Toast of the day, house made chili with cheese'
          },
          {
            name: 'Chicken Avo Sandwich',
            price: '14',
            text: 'Chicken, avocado, pesto'
          },
          {
            name: 'Spinach Kale Salad',
            price: '14',
            text: 'Spinach, kale, veggies, greens'
          }
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
