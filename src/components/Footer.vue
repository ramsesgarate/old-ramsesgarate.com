<template>
  <footer class="bg-gray-900 text-gray-300 font-normal pb-16">
    <div class="container mx-auto">
      <div class="flex justify-center mb-8 flex-wrap">
        <g-link
          v-for="(link, index) in siteLinks"
          :key="`internal-${index}`"
          :to="link.path"
          class="mr-4 border-b-2 border-transparent hover:border-green-500 transition duration-200 p-2"
        >
          {{ link.name }}
        </g-link>
        <a
          v-for="(link, index) in externalLinks"
          :key="`external-${index}`"
          :href="link.path"
          target="_blank"
          rel="noopener noreferrer"
          class="mr-4 border-b-2 border-transparent hover:border-green-500 transition duration-200 p-2"
        >
          {{ link.name }}
        </a>
      </div>
      <div class="flex justify-center">
        ¡Hecho con ❤ y con
        <a
          href="https://gridsome.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-2"
          title="Gridsome"
        >
          <gridsome-logo />
        </a>
        !
      </div>
    </div>
  </footer>
</template>

<script>
import { footerLinks } from "~/data/navLinks";
import GridsomeLogo from "~/assets/svg/gridsome.svg";
import NetlifyLogo from "~/assets/svg/netlify.svg";

export default {
  components: {
    GridsomeLogo,
    NetlifyLogo,
  },
  computed: {
    siteLinks() {
      return footerLinks.filter((link) => !link.external);
    },
    externalLinks() {
      return footerLinks.filter((link) => link.external);
    },
  },
};
</script>

