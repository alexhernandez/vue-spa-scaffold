<template>
  <div class="vh white">
    <h1>VUE SPA SCAFFOLD</h1>
    <p>{{ msg | brackets }}</p>
    <br>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './../components/Navigation.vue';

export default {
  data() {
    return {
      msg: 'CONTACT'
    }
  },
  components: { Navigation },
}
</script>
