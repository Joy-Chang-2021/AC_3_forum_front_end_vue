import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // 類似元件的 data，但此屬性中的資料每個元件皆可使用
  state: {  
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // 用來修改 state 的方法，使用  commit 發動
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser, // 內部 state 當前狀態
        ...currentUser // 通常透過 API 取得
      }
      state.isAuthenticated = true
    }
  },
  // 透過 API 請求資料，使用 dispatch 發動
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()
        if (statusText !== "OK") throw new Error(statusText)

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  // 可協助分類並設定不同的state/mutation...
  modules: {
  }
})
