<template>
  <button @click="addOne">Add 10</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increase', { value: 10 });
    },
  },
};
</script>
