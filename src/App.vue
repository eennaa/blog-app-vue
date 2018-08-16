<template>
  <div id="app">    
    <navbar/>
    <app-posts/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppPosts from './pages/AppPosts.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    AppPosts
  }
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

