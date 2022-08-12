export default {
  addOne(context) {
    setTimeout(() => {
      context.commit('addOne');
    }, 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },
};
