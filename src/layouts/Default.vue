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
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
