<template>
  <nav>
    <div class="container">
      <g-link to="/" class="link-home">
        <g-image 
          src="~/assets/images/logo-rg.png" 
          class="favicon"
          blur="5"
          width="100"
          height="100" 
          alt="Logo"
          ></g-image>
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
@import '~/assets/style/base/variables.scss';

nav .container {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.link-home {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: $font-color;
    & .text {
        display: none;
    }
    & .favicon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 12px;
    }
}


.links-nav a {
    color: $font-color;
    padding: .5rem;
    border-radius: 6px;
    margin-right: 16px;
    
    &:hover,
    &.active{
        background-color: rgba(0, 0, 0, 0.034);
    }

    &:last-of-type {
        margin-right: 0;
    }
}

@include phablet-breakpoint {
    nav .container {
        height: 120px;
    }
    .link-home .text {
        display: inline-block;
    }
    .links-nav a {
        padding: .75rem;
    }
}
</style>
