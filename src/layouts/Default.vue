<template>
  <div id="app">

    <nav-bar/>

    <main class="main-content">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    NavBar
  }
}
</script>

<style lang="scss">
/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
} */

/* .main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
} */

.main-content {
    margin-top: 55px;
    padding: 40px 0 0;
    min-height: calc(300vh - 190px);
}

@media (min-width: 620px) {
    .main-content {
        margin-top: 140px;
        padding: 60px 0 0;
        min-height: calc(300vh - 360px);
    }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
