import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/user';
import movieModule from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appLoading: false,
  },
  getters: {
    isLoading(state) {
      return state.appLoading;
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.appLoading = loading;
    },
  },
  actions: {},
  modules: {
    userModule,
    movieModule,
  },
});
