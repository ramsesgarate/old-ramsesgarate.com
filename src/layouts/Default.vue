<template>
  <div id="app">
    <nav-bar/>
    <main class="container">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">

</style>
