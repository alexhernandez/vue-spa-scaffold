<template>
  <div>
    <br><br><br>
    <h1>VUE SPA SCAFFOLD</h1>
    <p>{{ msg | brackets }}</p>
    <router-link to="/" exact>Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'CONTACT'
    }
  }
}
</script>
