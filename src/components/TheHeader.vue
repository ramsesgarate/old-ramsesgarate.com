<template>
  <header class="header">
    <div class="header__content">
      <g-link to="/">
        <g-image
          src="~/assets/svg/logo-120.svg"
          class="header__logo"
          alt="Logo RG"
          width="56"
          height="56"
          blur="10"
          quality="90"
        ></g-image>
      </g-link>
      <nav class="header-nav">
        <ul class="header-nav__links">
          <li
            v-for="(link, index) of links"
            :key="index"
            class="header-nav__link"
          >
            <g-link :to="link.path" class="">
              <span class="symbol symbol--right"> &lt; </span>
              <span>
                {{ link.name }}
              </span>
              <span class="symbol symbol--left">
                <span> &#47; </span>
                <span> &gt; </span>
              </span>
            </g-link>
          </li>
        </ul>
        <button-search class="ml-2" @click="showSearchModal" />
      </nav>
    </div>
  </header>
</template>

<script>
import ButtonSearch from "@/components/ButtonSearch";

import { navLinks } from "@/data/navLinks";

export default {
  components: {
    ButtonSearch,
  },
  data() {
    return {
      search: "",
      isModalSearchOpen: false,
    };
  },
  computed: {
    links() {
      return navLinks;
    },
  },
  methods: {
    showSearchModal() {
      this.$emit("open-search-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply bg-gray-900;

  &__content {
    @apply container mx-auto max-w-screen-lg items-center flex justify-between py-2 h-16 sm:h-20;
  }

  &-nav {
    @apply hidden sm:flex items-center;

    &__links {
      @apply flex text-center justify-between;
    }

    &__link {
      @apply px-2 py-2 hover:text-teal-400;

      a {
        @apply font-medium uppercase transition-colors duration-300 ease-linear flex items-center;

        .symbol {
          @apply opacity-0 transition-opacity duration-300 ease-in mr-1;

          &--right {
            @apply mr-1;
          }

          &--left {
            @apply ml-1 flex;
          }
        }
      }

      a.active--exact {
        @apply text-teal-400;

        .symbol {
          @apply opacity-100;
        }
      }
    }
  }
}
</style>

