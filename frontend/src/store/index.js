import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    message: '',
    boards: [],
    matchs: [],
    token: null,
    me: {
      email: null,
      id: null,
      username: null
    }
  },
  actions,
  mutations,
  plugins: [
    createPersistedState({
      key: 'worldcuppronos',
      paths: ['token', 'authenticated', 'username']
    })
  ]
})
