<template>
  <nav>
    <div class="container">
      <g-link to="/" class="link-home">
        <g-image src="~/assets/images/logo-50x50.png" class="favicon" alt="Logo"></g-image>
        <span class="text">Ramses Garate</span>
      </g-link>
      <div class="links-nav">
        <g-link 
          v-for="(link, index) in links" 
          :key="index"
          :to="link.path"
        >
          {{link.name}}
        </g-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { navLinks } from "~/data/navLinks"

export default {
  computed: {
    links() {
      return navLinks;
    }
  }
}
</script>

<style lang="scss">
</style>
