<template>
  <h3>{{ normalizedCounter }}</h3>

  <p>We do more here...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counterModule', ['normalizedCounter']),
  },
};
</script>
