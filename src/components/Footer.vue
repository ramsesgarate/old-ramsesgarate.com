<template>
  <footer class="footer container">
    <div class="links-nav row">
      <g-link 
        v-for="(link,index) in siteLinks"
        :key="`internal-${index}`"
        :to="link.path"
      >
        {{link.name}}
      </g-link>
      <a
        v-for="(link, index) in externalLinks"
        :key="`external-${index}`"
        :href="link.path"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {{link.name}}
      </a>
    </div>
    <div class="external-links">
      <a href="https://github.com/ramsesgarate" title="Open-source on GitHub" target="_blank" rel="noopener noreferrer">
        <g-image 
        src="~/assets/images/github-d160ace5798527574789e89ec034e8f7.png"
        blur="5"
        width="60"
        height="60" 
        class="footer-img" 
        alt="GitHub"></g-image>
      </a>
      <a href="https://www.netlify.com/" title="Hosted by Netlify" target="_blank" rel="noopener noreferrer">
        <g-image 
        src="~/assets/images/netlify-c19c124e43a41d1850c556d462712031.png"
        blur="5"
        width="60"
        height="60" 
        class="footer-img" 
        alt="Netlify"></g-image>
      </a>
      <a href="http://gridsome.org/" title="Built with Gridsome" target="_blank" rel="noopener noreferrer">
        <g-image 
        src="~/assets/images/only-logo.svg"
        blur="5"
        width="60"
        height="60" 
        class="footer-img" 
        alt="GridSome"></g-image>
      </a>
    </div>
  </footer>
</template>

<script>
import { footerLinks } from "~/data/navLinks"

export default {
  computed: {
    siteLinks() {
      return footerLinks.filter(link => !link.external);
    },
    externalLinks () {
      return footerLinks.filter(link => link.external);
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/base/variables.scss';

.footer {
    display: flex;
    height: 120px;
    justify-content: space-between;
    align-items: center;
    font-size: .85rem;

    & .links-nav > a {
        color: $font-color;
        margin-right: 0;
        padding-left: 16px;
        padding-right: 16px;

        &.active {
            background-color: transparent;
        }
    }

    & .external-links a {
        margin-right: 12px;
        & img {
            width: 30px;
            height: 30px;
        }

        &:last-of-type {
          margin-right: 0;
        }
    } 
}

@include phablet-breakpoint {
    .footer {
        font-size: 1rem;
        height: 150px;
    }
}
</style>
