<template>
  <button v-if="!userIsAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>
