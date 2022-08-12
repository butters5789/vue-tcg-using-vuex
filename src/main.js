import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
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
    userIsAuthenticated(state) {
      return state.isLoggedIn;
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
    login({ commit }) {
      commit('setAuth', { isAuth: true });
    },
    logout({ commit }) {
      commit('setAuth', { isAuth: false });
    },
  },
  mutations: {
    addOne(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
