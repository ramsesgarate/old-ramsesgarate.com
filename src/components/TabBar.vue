<template>
  <nav
    class="tab-bar fixed bottom-0 flex bg-gray-800 w-full justify-around h-14 px-2 rounded-t z-10 transition-colors duration-300 ease-linear sm:hidden"
    :class="{ 'tab-bar--hidden': !showNavbar }"
  >
    <template v-for="(link, index) in navLinks">
      <g-link
        :to="link.path"
        class="text-teal-400 transition-colors duration-300 ease-linear flex flex-col justify-center items-center px-2"
        :key="index"
      >
        <component
          :is="link.icon + '-icon'"
          class="transform transition duration-300 ease-linear h-6 w-6"
          :class="[
            $route.path === link.path ? 'translate-y-0' : 'translate-y-3',
          ]"
        />
        <span
          class="opacity-0 transition duration-300 ease-linear"
          :class="{
            'text-teal-400 opacity-100': $route.path === link.path,
          }"
        >
          {{ link.name }}
        </span>
      </g-link>
    </template>
  </nav>
</template>

<script>
import HomeIcon from "~/assets/icons/icon-home.svg";
import BookIcon from "~/assets/icons/icon-book.svg";
import UserIcon from "~/assets/icons/icon-user.svg";
import { navLinks } from "~/data/navLinks.js";

export default {
  components: {
    HomeIcon,
    BookIcon,
    UserIcon,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      navLinks: navLinks,
    };
  },
  computed: {
    path() {
      return this.$route.path;
    },
    classes() {
      return {
        iconActive: [
          "outline-none translate-y-0 transform transition-all duration-1000",
        ],
        iconInactive: [
          "outline-none translate-y-3 transform transition-all duration-1000",
        ],
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/style/base/variables.scss";

.tab-bar {
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}
.tab-bar.tab-bar--hidden {
  box-shadow: none;
  transform: translate3d(0, 100%, 0);
}

.primary {
  fill: #64d5ca;
}

.secondary {
  fill: #20504f;
}
</style>