<template>
  <div id="app">
    <nav-bar/>
    <LazyHydrate when-idle>
      <tab-bar/>
    </LazyHydrate>
    <main class="container">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar,
    TabBar: () => import('~/components/TabBar.vue'),
    Footer: () => import('~/components/Footer.vue'),
  }
}
</script>
