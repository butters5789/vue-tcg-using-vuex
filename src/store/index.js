import { createStore } from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import counterModule from './modules/counter/index';

export default createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters,
  actions,
  mutations,
  modules: {
    counterModule,
  },
});
