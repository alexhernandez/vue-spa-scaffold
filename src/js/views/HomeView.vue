<template>
  <div class="vh yellow">
    <h1>VUE SPA SCAFFOLD</h1>
    <p>{{ msg | parens }}</p>
    <br>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './../components/Navigation.vue';

export default {
  data() {
    return {
      msg: 'HOME'
    }
  },
  components: { Navigation },
}
</script>
