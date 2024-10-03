import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    user: {
      email: ''
    }
  },
  mutations: {
    setAuthenticated(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setAuthenticated', true);
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setAuthenticated', false);
      commit('setUser', { email: '' });
    }
  }
});
