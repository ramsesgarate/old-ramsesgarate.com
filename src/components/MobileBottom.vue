<template>
  <nav
    class="tab-bar fixed bottom-0 bg-gray-800 w-full px-2 rounded-t-xl z-50 border-t-2 border-teal-400 transition-colors duration-300 ease-linear sm:hidden"
    :class="{ 'tab-bar--hidden': !showNavbar }"
  >
    <div class="flex justify-around h-14">
      <g-link
        to="/"
        class="text-teal-400 transition-colors duration-300 ease-linear flex flex-col justify-center items-center px-2"
      >
        <home-icon
          class="transform transition duration-300 ease-linear h-7 w-7"
          :class="[$route.path === '/' ? 'icon' : 'icon--inactive']"
        />
      </g-link>
      <div class="relative bg-transparent">
        <button class="circleBackground flex justify-center items-center">
          <search-icon class="h-8 w-8" />
        </button>
        <div class="bottom"></div>
      </div>
      <g-link
        to="/blog/"
        class="text-teal-400 transition-colors duration-300 ease-linear flex flex-col justify-center items-center px-2"
      >
        <book-icon
          class="transform transition duration-300 ease-linear h-7 w-7"
          :class="[$route.path === '/blog/' ? 'icon' : 'icon--inactive']"
        />
      </g-link>
    </div>
  </nav>
</template>

<script>
import HomeIcon from "~/assets/icons/icon-home.svg";
import BookIcon from "~/assets/icons/icon-book.svg";
import UserIcon from "~/assets/icons/icon-user.svg";
import SearchIcon from "~/assets/icons/icon-search.svg";
import { navLinks } from "~/data/navLinks.js";

export default {
  components: {
    HomeIcon,
    BookIcon,
    UserIcon,
    SearchIcon,
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

      /*  this.showNavbar = currentScrollPosition < this.lastScrollPosition; */
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss">
.tab-bar {
  transform: translate3d(0, 0, 0);
  transition: 0.2s all ease-out;
}

.tab-bar.tab-bar--hidden {
  box-shadow: none;
  transform: translate3d(0, 100%, 0);
}

.circleBackground {
  left: 50%;
  transform: translateX(-50%);
  bottom: 22px;

  @apply bg-gray-900 rounded-full absolute mb-0 h-16 w-16;

  z-index: 3;
}

$size: 35px;

.bottom {
  left: 50%;
  transform: translateX(-50%);
  top: -2px;
  z-index: 2;
  height: 2.4rem;
  width: 4.6rem;

  @apply bg-teal-400 absolute rounded-b-full;
}
</style>