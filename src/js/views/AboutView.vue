<template>
  <div class="vh blue">
    <h1>VUE SPA SCAFFOLD</h1>
    <p>{{ msg | brace }}</p>
    <br>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './../components/Navigation.vue';

export default {
  data() {
    return {
      msg: 'ABOUT'
    }
  },
  components: { Navigation }
}
</script>
