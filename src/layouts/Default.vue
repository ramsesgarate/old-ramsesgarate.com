<template>
  <div id="app">
    <nav-bar/>
    <tab-bar v-if="showTabBar"/>
    <main class="container">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  components: {
    'nav-bar': () => import('~/components/NavBar'),
    'tab-bar': () => import('~/components/TabBar'),
    'Footer': () => import('~/components/Footer')
  },
  data() {
    return {
      showTabBar: true
    }
  }
}
</script>
