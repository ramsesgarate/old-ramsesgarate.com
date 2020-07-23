<template>
  <div id="app">
    <nav-bar/>
    <tab-bar/>
    <main class="container">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import TabBar from '~/components/TabBar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    TabBar,
    Footer
  }
}
</script>
