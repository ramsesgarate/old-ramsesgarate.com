<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__contact">
        <p class="text-center mb-4">
          Ya sea que tengas una pregunta o simplemente quieras saludar,
          <br />
          ¡haré todo lo posible para responderte!
        </p>
        <r-button to="mailto:rsgarate@gmail.com" outlined>Hola!</r-button>
      </div>
      <div class="footer__socials">
        <g-link
          v-for="(link, index) of siteLinks"
          :key="`internal-${index}`"
          :to="link.path"
        >
          {{ link.name }}
        </g-link>
        <a
          v-for="(link, index) of externalLinks"
          :key="`external-${index}`"
          :href="link.path"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
      </div>
      <div class="footer__about">
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
import RButton from "@/components/atoms/Button";

export default {
  components: {
    RButton,
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


<style lang="scss" scoped>
.footer {
  @apply bg-gray-900 text-gray-300 font-normal pb-16;

  &__content {
    @apply container mx-auto max-w-screen-lg md:px-20 lg:px-10;
  }

  &__contact {
    @apply flex flex-col items-center mx-auto mb-10;
  }

  &__socials {
    @apply flex justify-center mb-8 flex-wrap;

    a {
      @apply hover:text-teal-400  transition-colors duration-300 ease-in mr-4 p-2;
    }
  }

  &__about {
    @apply flex justify-center;

    &:last-of-type {
      @apply mr-0;
    }
  }
}
</style>

