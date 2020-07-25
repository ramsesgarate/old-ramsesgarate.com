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

export default {
  components: {
    NavBar,
    TabBar: () => import('~/components/TabBar.vue'),
    Footer: () => import('~/components/Footer.vue'),
  }
}
</script>
