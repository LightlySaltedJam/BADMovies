import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      token: null,
      user: null,
    };
  },
  mutations,

  actions,

  getters,
};
