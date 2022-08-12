export default {
  addOne(state) {
    state.counter = state.counter + 1;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
