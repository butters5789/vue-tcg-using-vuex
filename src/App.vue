<template>
  <base-container v-if="userIsAuthenticated" title="Vuex">
    <the-counter></the-counter>

    <favorite-value></favorite-value>

    <button @click="addOne">Add 1</button>

    <change-counter></change-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions('counterModule', ['addOne']),
  },
  components: {
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter,
    UserAuth,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
