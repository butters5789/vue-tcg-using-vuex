import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
  actions: {
    addOne(context) {
      setTimeout(() => {
        context.commit('addOne');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  mutations: {
    addOne(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  namespaced: true,
};

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login({ commit }) {
      commit('setAuth', { isAuth: true });
    },
    logout({ commit }) {
      commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  modules: {
    counterModule,
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
