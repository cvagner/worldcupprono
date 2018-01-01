import User from '../api/user'
import Auth from '../api/auth'
import Board from '../api/board'
import router from '../router'
import * as types from './mutation-types'

// Auth

export const login = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
  commit(types.LOGIN)
}

export const logout = ({ commit }) => {
  commit(types.LOGOUT)
  router.push('/login')
}

export const refreshToken = ({ commit, state }) => {
  const token = state.token
  if (token) {
    Auth.requestNewToken({ token })
      .then(newToken => commit(types.SET_TOKEN, { token: newToken }))
      .catch(() => commit(types.LOGOUT))
  }
}

// User

export const getUserInfo = ({ commit, state }) => {
  if (state.authenticated) {
    User.getUserInfo(state).then(response => {
      const user = response.data
      commit(types.SET_USER_INFO, { user })
      return user
    })
  }
  return Promise.resolve([])
}

// Boards

export const saveBoard = ({ commit, state }, board) => {
  Board.create(board, state).then(() => {
    getBoards({ commit, state })
  })
}

export const getBoards = ({ commit, state }) => {
  if (state.authenticated) {
    return Board.all(state).then(response => {
      const boards = response.data
      commit(types.SET_BOARDS, { boards })
      return boards
    })
  }
  return Promise.resolve([])
}

// Messages

export const displayMessage = ({ commit }, payload) => {
  commit(types.SET_MESSAGE, payload)
}

export const cleanMessage = ({ commit }) => {
  commit(types.CLEAN_MESSAGE)
}