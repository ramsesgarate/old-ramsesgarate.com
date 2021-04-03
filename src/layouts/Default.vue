<template>
  <div id="app" class="">
    <nav-bar />
    <tab-bar />
    <main class="container">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import TabBar from "~/components/TabBar";

export default {
  components: {
    NavBar,
    Footer,
    TabBar,
  },
};
</script>

