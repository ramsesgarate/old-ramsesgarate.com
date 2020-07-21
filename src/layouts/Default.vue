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
import NavBar from '~/components/NavBar'
import TabBar from '~/components/TabBar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    TabBar,
    Footer
  },
  data() {
    return {
      showTabBar: false
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/main.scss';

</style>