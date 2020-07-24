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
const TabBar = () => import(
  /* webpackChunkName: "tab-bar" */ '~/components/TabBar'
);
const Footer = () => import(
  /* webpackChunkName: "Footer" */ '~/components/Footer'
);

export default {
  components: {
    NavBar,
    TabBar,
    Footer
  }
}
</script>
