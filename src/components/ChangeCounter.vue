<template>
  <button @click="increase({ value: 12 })">Add 12</button>
  <button @click="addOne">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('counterModule', ['addOne', 'increase']),
  },
};
</script>
