<template>
  <div id="app">
    <nav-bar/>
    <lazy-component>
      <tab-bar/>
    </lazy-component>
    <main class="container">
      <slot/>
    </main>
    <lazy-component>
      <Footer/>
    </lazy-component>
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
