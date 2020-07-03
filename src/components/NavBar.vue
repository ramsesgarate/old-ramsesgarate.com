<template>
  <nav class="nav" :class="{fixed}">
    <div class="nav-container">
      <div class="brand">
        <g-link to="/">
          <g-image src="~/assets/images/logo-50x50.png" class="favicon" alt="Logo"></g-image>
          <span class="text">Ramses Garate</span>
        </g-link>
      </div>
      <div class="links">
        <g-link 
          v-for="(link, index) in links" 
          :key="index"
          :to="link.link"
        >
          {{link.name}}
        </g-link>
      </div>
      <div class="cta">
          <ToggleTheme/>
        </div>
    </div>
  </nav>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'

export default {
  name: 'nav-bar',
  components: {
    ToggleTheme
  },
  data() {
    return {
      fixed: false, 
      links: [
        {
          name: 'Sobre mi',
          link: '/about/'
        },
        {
          name: 'Blog',
          link: '/blog/'
        },
        {
          name: 'Contacto',
          link: '/contact/'
        }
      ]
    }
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
        if (window.scrollY > 20) {
          this.fixed = true;
        }else {
          this.fixed = false;
        }
    }
},

}
</script>

<style lang="scss">
</style>
